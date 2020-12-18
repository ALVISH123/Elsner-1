import React from "react"
import axios from "axios"
import { Spin } from "antd"
import moment from "moment"
import "./FullBlog.css"
class FullBlog extends React.Component{
    state={
        singlePost: null,
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

         this.state.singlePost!==null  ? <div className="container">
            <h1 style={{marginBottom:"25px",marginLeft:"15px"}}>Search Results for: </h1>
             <div className="blog_inner_wrapper blog_filter_row row">
                 
             <div className="col-md-6 blog_search_col">
    <div className="searchform-box search-form-box">
      <form role="search"  className="search-form" action="https://staging.elsner.com">
        <input type="search" className="search-field" placeholder="Search blog"  pattern="[A-Za-z]+" required />									
        <button type="submit" className="search-submit custom-btn-sub more-btn-color">Search </button>
      </form>
      </div>
     </div>
                 <div className="form-group col-md-6">
                     <select>
                         <option value="All Catagories">All Catagories</option>
                         <option value="Android">Android</option>
                     </select>

             

             </div>
             

             <h6 class="line-headding">Our Blog</h6>
             <h1 className="bannners-headding"> {this.state.singlePost?.title?.rendered} </h1>
       <div className=" row justify-content-md-center">
       <p className="text-center" style={{margin:10}}> -{moment(this.state.singlePost?.date.substring(0,10)).format("MMMM DD, YYYY")}</p>
       
        <img  src={this.state.singlePost._embedded['wp:featuredmedia']['0'].source_url} />
            </div>
    <div className="container m-5" dangerouslySetInnerHTML={{ __html: this.state.singlePost?.content?.rendered }}></div> 
    </div>
        </div> : <div style={{ textAlign: "center",
  /* background: rgba(0, 0, 0, 0.05); */
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "30px 50px",
  margin: "20px 0"}}> <Spin /> </div>
                    
        );
        }  
}
export default FullBlog;