import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  './Header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useNavigate } from 'react-router-dom';

const Headers = (props) => {
  // const [totalItems , setTotalItems] = useState("");
  let navigate = useNavigate();
  const opencart=()=>{
    navigate('/cart') ;
  }
  const redirecttohome =()=>{
    navigate('/')
  }
  const gotosignin =()=>{
    navigate('/signin');
  }
  const handleLogout = ()=>{
    alert("Logged Out Successfully") ;
    localStorage.setItem("isAuth" , JSON.stringify(false));
    // localStorage.removeItem("amazoncartdata");
  }
  
// useEffect(()=>{
//   const ttlItems = JSON.parse(localStorage.getItem("totalItems"));
//    setTotalItems(ttlItems);
// }, [totalItems]);
  // console.log(props);

  return (
    <>
    <div className='header'>
    <img  onClick={redirecttohome}
          alt='logoimg'
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
     />
    <div className='header_search'>
      <input type='text' className='header_searchinput' />
      <SearchIcon className='header_search_icon' />
    </div>
    <div className='header_sidenav'>

      <div className='sidenav_options'>
        <span className='option1'>Hello Guest</span>
        <span onClick={gotosignin} className='option2'>Sign In</span>
      </div>
      
      <div className='sidenav_options'>
        <span className='option1'>Returns</span>
        <span onClick={handleLogout} className='option2'>Logout </span>
      </div>
      
      <div className='sidenav_options'>
        <span className='option1'>Your</span>
        <span className='option2'>Prime</span>
      </div>

      <div className='cart_basket'>
        <ShoppingCartIcon className='carticon' onClick={opencart} />
        <span className='count option2'> {props.ttlitem} </span>
      </div>

    </div>
  </div>

  <div className='secondheader'>
    <p>
      <span className='dehazeicon'> <DehazeIcon /></span>
      <span className='all'>All</span>
      <span>Amazon miniTV</span>
      <span>Sell</span>
      <span>Best Sellers</span>
      <span>Today's Deals</span>
      <span>Mobiles</span>
      <span>Electronics</span>
      <span>Primes</span>
      <span>Customer Service</span>
      <span>Gift Ideas</span>
      <span>New Releases</span>
      <span>Home & Kitchen</span>
      <span className='cornerimg'>
        <img src='https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/SWM/SWM_400x39_Campus-Beats-S3._CB570867049_.jpg' alt='logosideimg' />
      </span>
    </p>

  </div>

</>

  )
}

export default Headers