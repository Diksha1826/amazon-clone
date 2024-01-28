import React, { useState } from "react";
import Headers from "../Header/Headers";
import Footer from "../Footer/Footer" ;
// import { redirect } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import "./Products.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import Megabar from "../Megadropbar/Megabar";
import { Button , Dialog , DialogContent } from "@mui/material";
// import StarHalfIcon from '@mui/icons-material/StarHalf';

const Products = () => {

  const [originaldata , setoriginaldata] = useState([]);
  const [data , setData] = React.useState([]);
  const [isloading , setisloding] = useState(true);
  const [isdata , setisdata] = useState(true) ;
  const [open , setOpen] = useState(false);
  
 

  React.useEffect(()=>{
     fetch('http://localhost:3001/data')
     .then((res)=> res.json())
     .then((res)=>{ setData(res)
                    setoriginaldata(res) 
                    setisloding(false)
                   })
     .catch((err)=> console.log(err))
  } , [])

  const navigate = useNavigate() ;

  const gotoinnerprdt=(elem)=>{
    navigate(`/products/${elem.id}`) ;
    // localStorage.setItem("singleLight" , JSON.stringify(elem)  );
  }

  const morethanfourstar =()=>{
  setisdata(true) ;
     let fourrating =  originaldata.filter((elem)=>{
       return elem.rating >= 4
      })  
      setData(fourrating);
  }

  const morethanthreestar =()=>{
  setisdata(true) ;
    let fourrating =  originaldata.filter((elem)=>{
      return elem.rating >= 3
     })  
     setData(fourrating);
 }

 const morethantwostar =()=>{
  setisdata(true) ;
  let fourrating =  originaldata.filter((elem)=>{
    return elem.rating >= 2
   })  
   setData(fourrating);
}
const morethanonestar =()=>{
  setisdata(true) ;
  let fourrating =  originaldata.filter((elem)=>{
    return elem.rating >= 1
   })  
   setData(fourrating);
}

const underfivehundred =()=>{
  const under = originaldata.filter((elem)=>{
    return elem.price <= 500 ;
  })
  if(under.length < 1){
    setisdata(false) ;
  }
  setData(under) ;
}
const btwfivetoonethous =()=>{
  setisdata(true) ;
  const under = originaldata.filter((elem)=>{
    return elem.price > 500 && elem.price <1000 ;
  })
  
  setData(under) ;
}
const btwonetotwothous =()=>{
  setisdata(true) ;
  const under = originaldata.filter((elem)=>{
    return elem.price > 1000 && elem.price < 2000 ;
  })
  setData(under) ;
}
const btwtwotothreethous =()=>{
  setisdata(true) ;
  const under = originaldata.filter((elem)=>{
    return elem.price > 2000 && elem.price < 3000 ;
  
  })
  setData(under) ;
}
const abovethreethous =()=>{
  setisdata(true) ;
  const under = originaldata.filter((elem)=>{
    return elem.price > 3000 ;
  })
  setData(under) ;
}
const openpopup =()=>{
  setOpen(true);
}
const closepopup =()=>{
  setOpen(false);
}


  return (
   
    isloading  ? <>
     <Headers />
     <Megabar />
     <div className="load">
    <h1 className="loading" >Loading...... please wait</h1>
    <img src="https://i.gifer.com/ZKZg.gif" className='loadingimg' alt="" />
    </div>
    </> :
    <div>
      <Headers />
      <Megabar />
      <div className="productbody">
        <div className="sidebar">
          <div className="sidebaritem">
            <ul>
              <li className="sidebarbold">Lighting</li>
              <li>
               <input type="checkbox" /> Top Brands</li>
              <li>
              <input type="checkbox" /> Made for Amazon</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Category</li>
              <li> <KeyboardArrowLeftIcon /> Home & Kitchen </li>
              <li> <KeyboardArrowLeftIcon /> Indoor Lighting </li>
              <li> <KeyboardArrowLeftIcon /> ceiling Lighting </li>
            </ul>
          </div>
        
          <div className="sidebaritem stars">
          <ul>
              <li className="sidebarbold">Avg. Customer Review</li>
              <li onClick={morethanfourstar} > <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon/> & Up </li>
              <li onClick={morethanthreestar}> <StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon/> & Up</li>
              <li onClick={morethantwostar}> <StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon/> & Up</li>
              <li onClick={morethanonestar}> <StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon/> & Up</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Amazon Prime</li>
              <li className="blueprime">
                 <input type="checkbox" /> <CheckIcon /> prime</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Delivery Day</li>
              <li>
                <input type="checkbox"/> Get it by Tomorrow </li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Pay On Delivery</li>
              <li> <input type="checkbox"/> Eligible for Pay On </li>
            </ul>
          </div>

          <div className="sidebaritem pricefilter">
          <ul>
              <li className="sidebarbold">Price</li>
              <li onClick={underfivehundred}> under ₹500</li>
              <li onClick={btwfivetoonethous}> ₹500 - ₹1,000</li>
              <li onClick={btwonetotwothous}> ₹1,000 - ₹2,000</li>
              <li onClick={btwtwotothreethous}> ₹2,000 - ₹3,000</li>
              <li onClick={abovethreethous}> Over ₹3,000</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Light Fixture Form</li>
              <li><input type="checkbox"/> Ceiling </li>
              <li><input type="checkbox"/> Chandelier </li>
              <li><input type="checkbox"/> Close to Ceiling</li>
              <li><input type="checkbox"/> Pendant</li>
              <li><input type="checkbox"/> Sconce</li>
              <li><input type="checkbox"/> Spotlight</li>
              <li><input type="checkbox"/> Wall</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Width</li>
              <li> <input type="checkbox" /> Up to 12.9 cm </li>
              <li> <input type="checkbox" /> 13 to 22.9 cm</li>
              <li> <input type="checkbox" /> 23 to 32.9 cm</li>
              <li> <input type="checkbox" /> 33 cm & above</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Included Components</li>
              <li> <input type="checkbox" /> Bulb</li>
              <li> <input type="checkbox" /> LED Lens</li>
              <li> <input type="checkbox" /> Mounting Hardware</li>
              <li> <input type="checkbox" /> Remote Control</li>
              <li> <input type="checkbox" /> Shade</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Height</li>
              <li> <input type="checkbox" /> Up to 9.9 cm</li>
              <li> <input type="checkbox" /> 10 to 19.9 cm</li>
              <li> <input type="checkbox" /> 20 to 29.9 cm</li>
              <li> <input type="checkbox" /> 30cm & above</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Finish Type</li>
              <li> <input type="checkbox" /> Brushed</li>
              <li> <input type="checkbox" /> Lacquered</li>
              <li> <input type="checkbox" /> Oil Rubbed</li>
              <li> <input type="checkbox" /> Painted</li>
              <li> <input type="checkbox" /> Polished</li>
              <li> <input type="checkbox" /> Powder Coated</li>
              <li> <input type="checkbox" /> Unfinished</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Length</li>
              <li> <input type="checkbox" /> Up to 17.9 cm</li>
              <li> <input type="checkbox" /> 18 to 29.9 cm</li>
              <li> <input type="checkbox" /> 30 to 42.9 cm</li>
              <li> <input type="checkbox" /> 43 cm & above</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Theme</li>
              <li> <input type="checkbox" /> Animal</li>
              <li> <input type="checkbox" /> Fantasy</li>
              <li> <input type="checkbox" /> Floral</li>
              <li> <input type="checkbox" /> Love</li>
              <li> <input type="checkbox" /> Music</li>
              <li> <input type="checkbox" /> Space</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Controller Type</li>
              <li> <input type="checkbox" /> Amazon Alexa</li>
              <li> <input type="checkbox" /> Google assistant</li>
              <li> <input type="checkbox" /> Push Button</li>
              <li> <input type="checkbox" /> Remote Control</li>
              <li> <input type="checkbox" /> Android</li>
              <li> <input type="checkbox" /> Hand Control</li>
              <li> <input type="checkbox" /> Ring</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Shade Material</li>
              <li> <input type="checkbox" /> Acrylic</li>
              <li> <input type="checkbox" /> Brass</li>
              <li> <input type="checkbox" /> Crystal</li>
              <li> <input type="checkbox" /> Glass</li>
              <li> <input type="checkbox" /> Metal</li>
              <li> <input type="checkbox" /> Stainless Steel</li>
              <li> <input type="checkbox" /> Iron</li>

            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Embellishment Feature</li>
              <li> <input type="checkbox" /> Crystal</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Special Features</li>
              <li> <input type="checkbox" /> Colour Changing</li>
              <li> <input type="checkbox" /> Dimmable</li>
              <li> <input type="checkbox" /> Energy Efficient</li>
              <li> <input type="checkbox" /> Water Resistant</li>
              <li> <input type="checkbox" /> Waterproof</li>
              <li> <input type="checkbox" /> Foldable</li>
              <li> <input type="checkbox" /> portable</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Installation Type</li>
              <li> <input type="checkbox" /> Flush Mount</li>
              <li> <input type="checkbox" /> semi Flush Mount</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Control Method</li>
              <li> <input type="checkbox" /> App</li>
              <li> <input type="checkbox" /> Remote</li>
              <li> <input type="checkbox" /> Touch</li>
              <li> <input type="checkbox" /> Voice</li>

            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Connectivity Protocol</li>
              <li> <input type="checkbox" /> Bluetooth </li>
              <li> <input type="checkbox" />  Wi-Fi</li>
              <li> <input type="checkbox" /> Z-Wave</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Lighting Method</li>
              <li> <input type="checkbox" /> Adjustable</li>
              <li> <input type="checkbox" /> Downlight </li>
              <li> <input type="checkbox" /> Uplight</li>
            </ul>
          </div>

          <div className="sidebaritem">
          <ul>
              <li className="sidebarbold">Brands</li>
              <li className="caps"> <input type="checkbox" /> GANE-SHART</li>
              <li> <input type="checkbox" /> Swanart</li>
              <li> <input type="checkbox" /> Homesake</li>
              <li className="caps"> <input type="checkbox" /> SHRI MAHAL ANTIQUES</li>
              <li className="caps"> <input type="checkbox" /> INTERIOR HANDICRAFT</li>
              <li className="caps"> <input type="checkbox" /> PRMOAGEN</li>
              <li> <input type="checkbox" /> Weldecor</li>
            </ul>
          </div>

          

        </div>

   
    
        <div className="products">
         
          { isdata ? data.map((elem)=>{
            
           return (<div key={elem.id} className="productitem"  >
            <div className="prdtimg" onClick={()=> gotoinnerprdt(elem)} >
            <img src={elem.image} alt="productimg" />
            </div>
            <p  className="prdtprice">₹{elem.price}</p>
            <p><s>{elem.strikeprice}</s></p>
            <p className="prdttitle" >{elem.title}</p>
            <span className="prdtrating"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />&nbsp; {elem.rating}</span>
            </div>
            ) 
          }) : <>
          <h1 className="sorrynoprdt"> Sorry no Product Found....</h1>
          </> } 
          
        </div>
      </div>

      <Footer />


    </div> 
  );
};

export default Products;
