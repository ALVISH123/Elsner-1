import React from "react"
import './App.css';
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import { Switch, Route, withRouter } from "react-router-dom";
import Blog from "./Component/Blog/Blog"
import FullBlog from "./Component/FullBlog/FullBog"
import { Affix } from 'antd';
import Catagory from "./Component/Catagory/Catagory";
import "../src/Style.css";

function App(props) {
  return (
    <>
    <Affix ooffsetTop={0} onChange={affixed => console.log(affixed)}>
      <Header />
      </Affix>
      <Switch>
        <Route path="/blog" exact component={Blog} />
        <Route path={'/blog/:id'} exact component={FullBlog} />
        <Route path={'/catagory/:catagoryid'} exact component ={Catagory} />
        {/* <Route path="/" component={App} /> */}
      </Switch>
      <Footer/>

    </>

  );
}

export default withRouter(App);
