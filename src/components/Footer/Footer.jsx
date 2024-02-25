import React from 'react'
import './Footer.css'

const Footer = () => {

 const  backtotop=()=>{
    window.scrollTo({
      top: 0 ,
      behavior: "smooth"
    });
  };

  return (
    <div className="footer">
    <div className="backtotop" onClick={backtotop} >
      <p>Back to top</p>
    </div>
    <div className="firstsubfooter">
      <div className="firstfooterone">
         <ul>
          <li className="bold">Get to Know Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science</li>
         </ul>
      </div>
      <div className="firstfootertwo">
      <ul>
          <li className="bold">Connect with Us</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
         </ul>
        
      </div>
      <div className="firstfooterthree">
      <ul>
          <li className="bold">Make Money with Us</li>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Protect and Build Your Brand</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
         </ul>
        
      </div>
      <div className="firstfooterfour">
      <ul>
          <li className="bold">Let Us Help You</li>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>

         </ul>
        
      </div>
    </div>
    <hr />
    <div className="secondsubfooter">
      <div className="logo">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logoimg" />
        <img src="" alt="" />
      </div>
      <div className="countryname">
        <p>
          <span> Australia </span>
          <span> Brazil </span>
          <span> Canada  </span>
          <span> China  </span>
          <span> France  </span>
          <span> Germany  </span>
          <span> Italy  </span>
          <span> Japan  </span>
          <span> Mexico  </span>
          <span> Netherlands  </span>
          <span> Poland  </span>
          <span> Singapore  </span>
          <span> Spain  </span>
          <span> Turkey  </span>
          <span> United Arab Emirates  </span>
          <span> United Kingdom  </span>
          <span> United States  </span>
        </p>
      </div>

    </div>
    <div className="thirdsubfooter">
      <div className="thirdfooter">
      <div className="thirdfooterone">
        <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>AbeBooks</li>
            <li>Books, art</li>
            <li>& collectibles</li>
          </ul>
        </div>
        <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>Shopbop</li>
            <li>Designer</li>
            <li>Fashion Brands</li>
          </ul>
        </div>
      </div>
      <div className="thirdfootertwo">
      <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>Amazon Web Services</li>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </ul>
        </div>
        <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>Amazon Business</li>
            <li>Everything For</li>
            <li>Your Business</li>
          </ul>
        </div>
      </div>
      <div className="thirdfooterthree">
      <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>Audible</li>
            <li>Download</li>
            <li>Audio Books</li>
          </ul>
        </div>
        <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>Prime Now</li>
            <li>2-Hour Delivery</li>
            <li>on Everyday Items</li>
          </ul>
        </div>
      </div>
      <div className="thirdfooterfour">
      <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>IMDb</li>
            <li>Movies, TV</li>
            <li>& Celebrities</li>
          </ul>
        </div>
        <div className="thirdsub">
          <ul>
            <li className='thirdfbold'>Amazon Prime Music</li>
            <li>100 million songs, ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="lastfoot">
        <p>Conditions of Use & sale Privacy Lotice Interest_Based Ads</p>
        <p>1996-2024,Amazon,com, Inc. or its affiliates</p>
      </div>
    </div>
  </div>
  )
}

export default Footer