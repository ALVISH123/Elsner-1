import React, {Component} from "react"
import "./Header.css"
import {Link} from "react-router-dom"

class Header extends Component{

    render(){
        return(
           
            <header id="header" className="container-fluid covid-strip">
  <div className="custom-class">
    <div className="site_logo">
      <a href="">
        <img className="original-logo lazyloaded" src="https://www.elsner.com/wp-content/uploads/2020/05/elsner_logo_2020.svg" alt width={159} data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/05/elsner_logo_2020.svg" data-was-processed="true" style={{marginRight:"100px"}}/>
        {/* <noscript>&lt;img class="original-logo" src="https://www.elsner.com/wp-content/uploads/2020/05/elsner_logo_2020.svg" alt="" width="159" /&gt;</noscript> */}
        {/* <img className="sticky-logo lazyloaded" src="https://www.elsner.com/wp-content/uploads/2020/05/elsner_logo_2020.svg" alt width={159} data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/05/elsner_logo_2020.svg" data-was-processed="true" /> */}
        {/* <noscript>&lt;img class="sticky-logo" src="https://www.elsner.com/wp-content/uploads/2020/05/elsner_logo_2020.svg" alt="" width="159" /&gt;</noscript> */}
      </a>
    </div>
    <div className="right-header">
      <div className="custom-menu">
        <ul className="menu">
          <li id="menu-item-18523" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18523"><a href=""><span className="screen-reader-text">About Us</span></a></li>
          <li id="menu-item-18525" className="main-menu-class menu-item menu-item-type-custom menu-item-object-custom menu-item-18525">
            <a><span className="screen-reader-text">Services</span></a>
            {/* <div className="sub-menu child-menu">
              <ul className="mega-menu">
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/magento.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/magento.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/magento.png" /&gt;</noscript>
                      Magento Solutions 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/magento-development/"> Magento Development </a></li>
                    <li> <a href="https://www.elsner.com/magento-2-migration-services/"> Magento 2 Migration Services </a></li>
                    <li> <a href="https://www.elsner.com/services/magento-ecommerce-development/"> Ecommerce Development </a></li>
                    <li> <a href="https://www.elsner.com/services/magento-enterprise-development/"> Enterprise Development </a></li>
                    <li> <a href="https://www.elsner.com/magento-support-plan/"> Magento Support Plan </a></li>
                    <li> <a href="https://www.elsner.com/magento-upgrade-service/"> Magento Upgrade Service </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/open-Source.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/open-Source.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/open-Source.png"&gt;</noscript>
                      Open Source Development 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/php-web-development/"> PHP Web Development </a></li>
                    <li> <a href="https://www.elsner.com/services/codeigniter-development/"> Codeigniter Development </a></li>
                    <li> <a href="https://www.elsner.com/services/laravel-development/"> Laravel Development </a></li>
                    <li> <a href="https://www.elsner.com/services/node-js-development/"> Node Js Development </a></li>
                    <li> <a href="https://www.elsner.com/services/angular-js-development/"> Angular Js Development </a></li>
                    <li> <a href="https://www.elsner.com/services/reactjs-development/"> ReactJS Development </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/marketing.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/marketing.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/marketing.png"&gt;</noscript>
                      Digital Marketing 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/seo-services/"> SEO Services </a></li>
                    <li> <a href="https://www.elsner.com/services/ppc-management-services/"> PPC Management </a></li>
                    <li> <a href="https://www.elsner.com/services/social-media-marketing-services/"> Social Media Marketing </a></li>
                    <li> <a href="https://www.elsner.com/services/content-marketing-services/"> Content Marketing </a></li>
                    <li> <a href="https://www.elsner.com/services/online-reputation-management/"> Online Reputation Management </a></li>
                    <li> <a href="https://www.elsner.com/services/aso-services/"> ASO Services </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/design-1.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/design-1.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/design-1.png"&gt;</noscript>
                      Web Design Services 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/responsive-web-design/"> Responsive Web Design </a></li>
                    <li> <a href="https://www.elsner.com/services/custom-web-design/"> Custom Web Design </a></li>
                    <li> <a href="https://www.elsner.com/services/mobile-ui-design/"> Mobile UI Design </a></li>
                    <li> <a href="https://www.elsner.com/services/ecommerce-website-design/"> eCommerce Website Design </a></li>
                    <li> <a href="https://www.elsner.com/services/custom-logo-design/"> Custom Logo Design </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/cms.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/cms.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/cms.png"&gt;</noscript>
                      CMS Development 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/wordpress-development/"> WordPress Development Services </a></li>
                    <li> <a href="https://www.elsner.com/services/joomla-development/"> Joomla Development </a></li>
                    <li> <a href="https://www.elsner.com/services/drupal-web-development/"> Drupal Web Development </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/ecommerce.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/ecommerce.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/ecommerce.png"&gt;</noscript>
                      E-Commerce Solution 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/opencart-development/"> OpenCart Development </a></li>
                    <li> <a href="https://www.elsner.com/services/woocommerce-development/"> WooCommerce Development </a></li>
                    <li> <a href="https://www.elsner.com/services/joomla-ecommerce-development/"> Joomla Ecommerce Development </a></li>
                    <li> <a href="https://www.elsner.com/services/shopify-development/"> Shopify Development </a></li>
                    <li> <a href="https://www.elsner.com/services/bigcommerce-development/"> BigCommerce Development </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/mobile.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/mobile.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/mobile.png"&gt;</noscript>
                      Mobile App Development 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/services/android-app-development/"> Android App Development </a></li>
                    <li> <a href="https://www.elsner.com/services/iphone-app-development/"> iPhone App Development </a></li>
                    <li> <a href="https://www.elsner.com/services/beacon-app-development/"> Beacon App Development </a></li>
                    <li> <a href="https://www.elsner.com/services/enterprise-mobile-app-development/"> Enterprise App Development </a></li>
                  </ul>
                </li>
                <li className="children">
                  <a className="no-link">
                    <span>
                      <img src="https://www.elsner.com/wp-content/uploads/2020/07/hire.png" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/hire.png" className="lazyloaded" data-was-processed="true" />
                      <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/hire.png"&gt;</noscript>
                      Hire Developers 
                    </span>
                  </a>
                  <ul className="sub-menu child-menu-2">
                    <li> <a href="https://www.elsner.com/hire-magento-developer/"> Hire Magento Developer </a></li>
                    <li> <a href="https://www.elsner.com/hire-php-developer/"> Hire PHP Developer </a></li>
                    <li> <a href="https://www.elsner.com/hire-wordpress-developer/"> Hire WordPress Developer </a></li>
                    <li> <a href="https://www.elsner.com/hire-ios-developer/"> Hire iOS Developer </a></li>
                    <li> <a href="https://www.elsner.com/hire-android-developer/"> Hire Android Developer </a></li>
                  </ul>
                </li>
              </ul>
              <div className="side-content-wrapper">
                <div className="side-content">
                  <h4>Let our expert IT brains help you with your IT challenges</h4>
                  <div className="blue-btn"> <a href="https://www.elsner.com/contact-us/">LET'S CONNECT</a></div>
                </div>
              </div>
            </div> */}
          </li>
          <li id="menu-item-18526" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-18526"><a href=""><span className="screen-reader-text">Our Work</span></a></li>
          <li id="menu-item-18527" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18527"><a href=""><span className="screen-reader-text">Solutions</span></a></li>
          <li id="menu-item-20609" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20609"><Link to="/blog"><span className="screen-reader-text">Blog</span></Link></li>
          <li id="menu-item-20642" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20642"><a href=""><span className="screen-reader-text">Career</span></a></li>
          <li id="menu-item-18528" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-18528"><a href=""><span className="screen-reader-text">Store</span></a></li>
        
        </ul>
       
      </div>
      
     
      
    </div>
    <div className="right-header">
        <div className="Cta-menu">
         <div className="Cta-section"> <a className="btn btn-primary" href="https://www.elsner.com/contact-us/" title="cta button">Contact Us</a></div>
         
        </div>
      </div>
  </div>
</header>


        );
    }
}
export default Header;