import React from "react"
import axios from "axios"
import { Spin } from "antd"
import moment from "moment"
// import "./FullBlog.css"
class FullBlog extends React.Component{
    state={
        singlePost: null,
        catagories: [],
        catPage: 1,
        searchString: null
    }
//   getAuthor =()=>{
//     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
//     .then(response =>{
//          console.log("author:" , response.data.name)
//          this.setState({author: response.data.name})    
//         })
//     .catch(err=> console.log(err))
//     }  
    componentDidMount=()=>{

        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts/" + this.props.match.params.id + "?_embed")
        .then(response=> {
            this.setState({singlePost: response.data}) 
            
            // console.log(this.state.singlePost)
        })
        .catch(err=> console.log(err))
        axios.get("https://staging.elsner.com/wp-json/wp/v2/categories")
        .then(res=> {
            this.setState({catagories:res.data})
            // console.log(res.headers["x-wp-totalpages"]);  
            while(this.state.catPage<= res.headers["x-wp-totalpages"])
            {
                this.setState(prevState=>({catPage: prevState.catPage +1}), ()=>{
                    axios.get("https://staging.elsner.com/wp-json/wp/v2/categories?page=" + this.state.catPage)
                    .then(res=>{
                        this.setState(prevState=>({catagories: prevState.catagories.concat(res.data)}))
                    })
                })

            }     
        })
        
            
        
      
    }
    searchStringHandler=()=>{
      this.props.history.push("/search/" + this.state.searchString)
    }
    catagoriesFilter=(e)=>{
        console.log(e.target);
        this.props.history.push("/catagory/" + e.target.value)
        //  axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&categories=" + e.target.value)
        //     .then(res=> {
        //         this.setState({list: res.data})
        //     })
    
    }
    //  componentDidUpdate=()=>{
    //     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
    //     .then(response =>console.log("author:" , response.data))
    //     .catch(err=> console.log(err))
    // }
    // const getAuthor =()=>{
    //     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
    //     .then(response =>console.log("author:" , response.data))
    //     .catch(err=> console.log(err))
    //     this.setState({author: response.data.name}) 
    // }

    render(){
        console.log(this.props);

       
        

        return ( 

         this.state.singlePost!==null  ? <section className="section-padding white_block blog_detail_block"><div className="container">
            <h1 style={{fontSize: "45px",marginBottom: "30px",fontWeight: 300,Color: "#080909"}}>Search Results for: </h1>
            <div className="row"> <div className="col-md-12">
                <div className="blog_wrapper">
             <div className="blog_inner_wrapper blog_filter_row row">
                 
             <div className="col-md-6 blog_search_col">
    <div className="searchform-box search-form-box">
      <form role="search"  className="search-form" onSubmit={this.searchStringHandler}>
        <input type="search" className="search-field" placeholder="Search blog"  pattern="[A-Za-z]+" 
        onChange={(e)=>this.setState({searchString: e.target.value })}
        required />									
        <button type="submit" className="search-submit custom-btn-sub more-btn-color">Search </button>
      </form>
      </div>
     </div>
     <div class="col-md-6 blog_filter_col">
                           <div class="form-group">
                              <div class="select_container">
                                 
                                    
                <select className="form-control blog-category-dd" onChange={(e)=>this.catagoriesFilter(e)}>
                <option value='All Catagories' selected>All Catagories</option>
                        {this.state.catagories && this.state.catagories.map(catagory=> <option value={catagory.id}>{catagory.name} </option>)}
                    </select>
                    
                    </div>
                    </div>
                    </div>  
             </div>
             <div className="blog_inner_wrapper blog_title_bar dark_text">
             <h6 class="line-headding">Our Blog</h6>
             <h1  style={{fontSize: "45px",marginBottom: "30px",fontWeight: 300,Color: "#080909"}}className="banners-headding"> {this.state.singlePost?.title?.rendered} </h1>
             </div>
       <div className=" blog_inner_wrapper blog_image_wrapper">
       {/* <p className="text-center" style={{margin:10}}> -{moment(this.state.singlePost?.date.substring(0,10)).format("MMMM DD, YYYY")}</p> */}
       
        <img  src={this.state.singlePost._embedded['wp:featuredmedia']['0'].source_url} />
            </div>
    <div className="blog_inner_wrapper blog_content_bar wptb-table-container wptb-table-18415 wptb-table-container-0 wptb-table-container-matrix wptb-preview-table wptb-table-preview-head wptb-element-main-table_setting-18415 wptb-cell wptb-cell wptb-rating-star wptb-rating-star-selected-full" 
    dangerouslySetInnerHTML={{ __html: this.state.singlePost?.content?.rendered }}></div> 
    </div>
        </div></div></div> </section>: <div style={{ textAlign: "center",
  /* background: rgba(0, 0, 0, 0.05); */
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "30px 50px",
  margin: "20px 0"}}> <Spin /> </div>
                    
        );
        }  
}
export default FullBlog;