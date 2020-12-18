import React from "react";
import axios from "axios"
import Post from "../Post/Post"
import { Spin } from 'antd';
import "../Blog/Blog.css"
import "../FullBlog/FullBlog.css"
import "../Catagory/Catagory.css"
class Catagory extends React.Component{
    state={
        list:[],
        page: 1,
        showMore:false,
        searchString:"",
        catagories:[],
        catPage:1
    }
    searchStringHandler=()=>{
        this.props.history.push("/search/" + this.state.searchString)
      }
    catagoriesFilter=(e)=>{
        let cat= e.target.value;
        
        this.props.history.push("/catagory/" + e.target.value)
        this.getCatagoryList(cat);
        // console.log(e.target);
      
      
        //  axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&categories=" + e.target.value)
        //     .then(res=> {
        //         this.setState({list: res.data})
        //     })
    
    }
    catagoriesFilter=(e)=>{
        console.log(e.target);
        this.props.history.push("/catagory/" + e.target.value)
        //  axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&categories=" + e.target.value)
        //     .then(res=> {
        //         this.setState({list: res.data})
        //     })
    
    }
    getSearchList=(value)=>{
        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&search=" + value)
        .then(res=> {
            // this.setState({catagories:res.data})
            // console.log(res.headers["x-wp-totalpages"]); 
            console.log(res.data); 
            this.setState({list: res.data})
        })
    }
    componentDidMount=()=>{
      
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
        this.getSearchList(this.props.match.params.searchstring)
        // this.getCatagoryList(this.props.match.params.catagoryid);
        
        // axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&search=" + this.props.match.params.searchstring)
        // .then(res=> {
            // this.setState({catagories:res.data})
            // console.log(res.headers["x-wp-totalpages"]); 
            // console.log(res.data); 
            // this.setState({list: res.data})
            // while(this.state.catPage<= res.headers["x-wp-totalpages"])
            // {
            //     this.setState(prevState=>({catPage: prevState.catPage +1}), ()=>{
            //         axios.get("https://staging.elsner.com/wp-json/wp/v2/categories?page=" + this.state.catPage)
            //         .then(res=>{
            //             this.setState(prevState=>({catagories: prevState.catagories.concat(res.data)}))
            //         })
            //     })

            // }     
        
    }
    // componentDidUpdate=()=>{
    //     axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&categories=" + this.props.match.params.catagoryid)
    //     .then(res=> {
    //         this.setState({list: res.data})
    //     })
    // }
    render(){
        const blogSelectedHandler = (id) => {
            console.log("clicked id:", id);
            // this.props.history.push('/blog/' + id);
            this.props.history.push({
                pathname: "/blog/" + id

            })
        }
        return(
            this.state.list.length !== 0 ? <div className="container">
            <h1 style={{marginBottom:"25px",marginLeft:"15px"}}>Search Results for: {this.state.searchString} </h1>
             <div className="blog_inner_wrapper blog_filter_row row">
                 
             <div className="col-md-6 blog_search_col">
    <div className="searchform-box search-form-box">
      <form role="search"  className="search-form" 
      onSubmit={this.searchStringHandler}>
        <input
         type="search" 
         className="search-field" 
         placeholder="Search blog"  
         pattern="[A-Za-z]+" 
         onChange={(e)=>this.setState({searchString: e.target.value })}
         required />									
        <button type="submit" className="search-submit custom-btn-sub more-btn-color">Search </button>
      </form>
      </div>
     </div>
                 <div className="form-group col-md-6">
                 <select onChange={(e)=>this.catagoriesFilter(e)}>
                <option value='All Catagories' selected>All Catagories</option>
                        {this.state.catagories && this.state.catagories.map(catagory=> <option value={catagory.id}>{catagory.name} </option>)}
                    </select>

                   
             </div>
    
    </div>
    <div className="row">
                    {this.state.list.map(post => <div className="col-md-4" key={post?.id}> <Post title={post?.title?.rendered} date={post?.date} image={post?._embedded['wp:featuredmedia']['0']?.source_url} clicked={() => blogSelectedHandler(post.id)} /> </div>)}
      </div>
      {this.state.showMore && <div className="text-center"><button className="btn btn-primary" style={{margin:"20px",padding:10,marginBottom:50}} onClick={this.loadMore}> View More </button></div>} 
       </div>  : <div style={{
                    textAlign: "center",

                    /* background: rgba(0, 0, 0, 0.05); */
                    borderRadius: "4px",
                    marginBottom: "20px",
                    padding: "30px 50px",
                    margin: "20px 0"
                }}> <Spin /> </div>
        );
    }
}
export default Catagory;