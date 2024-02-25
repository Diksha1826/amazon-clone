import React, { useEffect, useState } from 'react'
import Headers from '../Header/Headers'
import Megabar from '../Megadropbar/Megabar'
import './Innerprdt.css'
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LockIcon from '@mui/icons-material/Lock';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../Footer/Footer';
import { useParams } from "react-router-dom";
import { Button, Dialog, DialogContent } from '@mui/material';


const Innerprdt = () => {

  const [singledata , setSingleData] = React.useState({}) ;
  const [quantity , setquantity] = useState("1") ;
  const [isloading , setisloding] = useState(true);
  const {id} = useParams() ;
  const [open , setOpen ] = useState(false) ;
  // console.log(id)

  useEffect(()=>{
    fetch(`http://localhost:3001/data/${id}`)
    .then((res)=> res.json())
    .then((res)=> {setSingleData(res) 
                   setisloding(false)})
    .catch((err)=> console.log(err))
  }, []) 

  const gotocart=(elem)=>{
    let cartdata = JSON.parse(localStorage.getItem("amazoncartdata")) || [] ;
    let flag = false ;
    for(let i=0;i<cartdata.length;i++){
      if(cartdata[i].id === elem.id){
        flag = true ;
        cartdata[i].qty = Number(cartdata[i].qty) + Number(quantity) ;
        break ;
      }
    }
    if(flag === false){
      elem.qty = quantity ;
      cartdata.push((elem)) ;
    }
    localStorage.setItem("amazoncartdata" , JSON.stringify(cartdata)) ;
  }

  const addqty =(e)=>{
      setquantity(e.target.value)
  }

  const openpopup=()=>{
    setOpen(true)

  }
  const closepopup=()=>{
    setOpen(false)

  }

  return (
    isloading ? <> 
    <Headers />
    <Megabar /> 
    <div className="load">
    <h1 className='loading'> Loading  Please wait!</h1> 
    <img src="https://i.gifer.com/ZKZg.gif" className='loadingimg' alt="" />
    </div>

    </> :
    <div>
      <Headers />
      <Megabar />
      

          <div className="mainbody">
          <div className="imagecontainer">
            <div>
              <img src={singledata.image} alt="" />
              <Button className='closeviewbtn' color='white' onClick={openpopup} variant='container'> Close View</Button>
              <Dialog open={open} onClose={closepopup} maxWidth='md'>
              <DialogContent>
                <img src={singledata.image} alt="img" />
              </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="detailscontainer">
            <div className="maindetails">
              <p className='title'>{singledata.title}</p>
              <p className="visitstore">Visit the {singledata.brand} Store</p>
              <p className="elemrating">{singledata.rating} <span><StarIcon /></span><KeyboardArrowDownIcon /> </p>
              <hr />
              <p className='detailprice'>₹<span>{singledata.price}</span></p>
              <p>M.R.P.: <s>{singledata.strikeprice}</s></p>
              <p>Inclusive of all taxes</p>
              <p className="emi"><b>EMI</b> starts at ₹133 per month. EMI options <KeyboardArrowDownIcon /> </p>
              <hr />
              <p className='offer'><b>Offers</b></p>
              <div className='offers'>
                <div className="offer1">
                  <p className='offer'><b>Bank Offer</b></p>
                  <p>Upto ₹850.00 discount on selected items</p>
                  <p className='offerno'> 22 offers &nbsp; <KeyboardArrowRightIcon /> </p>
                </div>
                <div className="offer2">
                  <p className='offer'><b>Partner Offers</b></p>
                  <p>Get GST invoice and save up to 28% on most of the items</p>
                  <p className='offerno'>1 offer &nbsp;  <KeyboardArrowRightIcon /></p>
                </div>
              </div>
              <hr />
              <div className="features">
                <div className="feature1">
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="pay" />
                  <p>Pay on Delivery</p>
                </div>
                <div className="feature2">
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="return" />
                  <p>10 days Returnable</p>
                </div>
                <div className="feature3">
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="deliv" />
                  <p>Amazon Delivered</p>
                </div>
                <div className="feature4">
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="warranty" />
                  <p>6 Month Warranty</p>
                </div>
              </div>
              <hr />
              <p className="purchase"><b>Puchase options ans add-ons</b></p>
              <hr />
              <div className="accessori">
                <p><b>Accessories</b></p>
                <p>Accessories and add-ons</p>
              </div>
              <hr />
              <div className="aboutprdt">
                <div className="keyofprdt">
                  <p><b>Brand</b></p>
                  <p><b>Colour</b></p>
                  <p><b>Material</b></p>
                </div>
                <div className="valueofprdt">
                  <p>{singledata.brand}</p>
                  <p>{singledata.colour}</p>
                  <p>{singledata.material}</p>
                </div>
              </div>
              <hr />
              <div className='about'>
                <p className='aboutpbold'><b>About this item</b></p>
                <p>{singledata.about_product}</p>
              </div>
              <hr />


            </div>
            <div className="cartdetails">
              <p className='Cartdetailprdtprice'>₹ <span>{singledata.price}</span>₀₀</p>
              <p className='freedeliv'>FREE delivery <span> <b>Thursday, 4 March</b>. Order within 12hrs 36mins.</span>Details</p>
              <p className="location"><LocationOnOutlinedIcon /> Delivering to Dehradun 248001 - Update location </p>

              <p className="instock">In stock</p>
              <p className="sold">Sold by <span className='soldby'>ETrade Online </span> and <span className='soldby'>Fulfilled by Amazon</span>.</p>
              <p className='protection'><b>Add a Protection Plan:</b></p>
              <p className='warrentycheckbox'><input type="checkbox" /><span><span className='soldby'>1 Year Extended Warranty</span>for <span className="red">₹93.00</span></span> </p>
              <div className="quantity">
                <p>Quantity: </p>
                <select name="qty" id="qty" onChange={(e)=>addqty(e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="1">6</option>
                  <option value="2">7</option>
                  <option value="3">8</option>
                  <option value="4">9</option>
                  <option value="5">10</option>
                </select> 
              </div>
              <button className="addtocart" onClick={()=>gotocart(singledata)}>Add to Cart</button>
              <button className="buynow">Buy Now</button>
              <p className='soldby secure'><LockIcon className="lock" /> &nbsp; Secure transaction</p>
              <p className="giftopt"><input type="checkbox" /> &nbsp; Add gift option</p>
              <hr />
              <button className="wishlist">Add to Wish List</button>
            </div>
          </div>

          </div>
      <Footer />

    </div>
  )
}

export default Innerprdt