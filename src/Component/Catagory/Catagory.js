import React from "react";
import axios from "axios"
import Post from "../Post/Post"
import { Spin } from 'antd';

class Catagory extends React.Component{
    state={
        list:[],
        page: 1,
        showMore:false
    }
    componentDidMount=()=>{
       
        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed&categories=" + this.props.match.params.catagoryid)
        .then(res=> {
            this.setState({list: res.data})
        })
    }
    render(){
        const blogSelectedHandler = (id) => {
            console.log("clicked id:", id);
            // this.props.history.push('/blog/' + id);
            this.props.history.push({
                pathname: "/blog/" + id

            })
        }
        return(
            this.state.list.length !== 0 ? <div className="row container" style={{marginLeft:100}}>
                    {this.state.list.map(post => <div className="  col-md-4" key={post?.id}> <Post title={post?.title?.rendered} date={post?.date} image={post?._embedded['wp:featuredmedia']['0']?.source_url} clicked={() => blogSelectedHandler(post.id)} /> </div>)}
                    {this.state.showMore && <div className="text-center"><button className="btn btn-primary" onClick={this.loadMore}> View More </button></div>}
                </div> : <div style={{
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