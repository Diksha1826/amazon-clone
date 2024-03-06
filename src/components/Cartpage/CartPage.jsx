import React, { useEffect, useState } from 'react'
import Headers from '../Header/Headers'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Cart.css'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
    const [cartdata , setcartdata] = useState([]);
    const [totalcost , settotalcost] = useState('');
    const [totalitem , settotalitem] = useState('');
    // const [isAuth , setIsAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("amazoncartdata")) ;
       setcartdata(data) ; 
       localStorage.setItem('totalItems' , JSON.stringify(totalitem))
    } , [])

    useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("amazoncartdata")) ;
        let total =  data.reduce((acc , item)=>{
            return acc + (item.price*item.qty) ;
        } , 0 ) ;
        // console.log(total)
        settotalcost(total) ;
        let ttlitem = data.reduce((acc , item)=>{
            return acc + Number(item.qty) ;
        } , 0) ;
        // console.log(ttlitem);
        settotalitem(ttlitem) ;
        // const auth = JSON.parse(localStorage.getItem("isAuth"));
        // if(auth === true){
        //     setIsAuth(true);  
        //   }
        //   else{
        //     setIsAuth(false);
        //   }
        localStorage.setItem('totalItems' , JSON.stringify(totalitem))

    } , [cartdata , totalitem])


    const handleqty =(e , elem)=>{
       const data = JSON.parse(localStorage.getItem("amazoncartdata")) ;
       for(var i=0;i<data.length;i++){
        if(elem.id === data[i].id){
            data[i].qty = e.target.value ;
            localStorage.setItem("amazoncartdata" , JSON.stringify(data))
            setcartdata(data) ;
            break;
        }
       }
    }

    const handledelete=(elem)=>{
       const data = JSON.parse(localStorage.getItem("amazoncartdata")) ;
       for(var i=0;i<data.length;i++){
         if(elem.id === data[i].id){
            data.splice(i , 1) ;
            localStorage.setItem("amazoncartdata" , JSON.stringify(data))
            setcartdata(data) ;
            break;
         }
       }


    }
    const gotocheckout =()=>{
        const auth = JSON.parse(localStorage.getItem("isAuth"));
        if(Number(totalitem) > 0){
        if(auth === true){
                localStorage.setItem('totalBill' , JSON.stringify(totalcost))
                localStorage.setItem('totalItems' , JSON.stringify(totalitem))
                navigate('/checkout')
        } 
        else{
                navigate('/signin')
        }
    }
    else{
        alert("Add Items to your cart");
    }
}


  
  return (
    <div>
        <Headers ttlitem={totalitem} />
        <div className='cartbody'>
         <div className='cartitemsdiv'>
            <h2 className='shopping'>Shopping Cart</h2>
            <p className='pricepara'>Price</p>
            <hr />
            <div className='cartitemmain'>

            {cartdata.map((elem , i)=>{
                return(
                    <>
                    <div className='cartitem' key={i}>
                        <div className="cartitemdetail">
                           <div className="cartitemimg">
                            <img src={elem.image} alt="itemimg" />
                           </div>
                           <div className="cartdesc">
                           <p className='cartdescpara'>{elem.title}</p>
                           <p className='cartdescinstock'>In stock</p>
                           <p className='eligible'>Eligible for FREE Shipping</p>
                           <img className='fullfill' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
                           <p className='cartdesccheckbox'><input type="checkbox" /> This will be a gift Learn more </p>
                           <div className="qtyndmore">
                           <select name="" id="selectqty" onChange={(e)=>handleqty(e , elem)}>
                            <option value="1"> Qty: {elem.qty}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                           </select>
                           <span>|</span>
                           <p onClick={()=>handledelete(elem)}>Delete</p>
                           <span>|</span>
                           <p>Save for later</p>
                           <span>|</span>
                           <p>See more like this</p>
                           <span>|</span>
                           <p>Share</p>
                           </div>
                           </div>
                        </div>
                        <div className="cartpricedetail">
                            <p> ₹{elem.price} </p>
                        </div>    
                    </div>
                    <hr />                            
                    </>
                )
            })}
            
<p className='lastsubttl'> Subtotal({totalitem}items):<b>₹{totalcost}</b> </p>
</div>


         </div>
         <div className="carttotaldiv">
            <p className='greenpara'>Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</p>
            <p className='subtotal'>Subtotal({totalitem} items): <span className="subtotalspan">₹{totalcost}</span></p>
            <p><input type="checkbox" /> &nbsp; This order contains a gift </p>
            <button className="buyfromcart" onClick={gotocheckout}>proceed to Buy</button>
            <div className='emiavail'> <p>EMI Available</p> <KeyboardArrowDownIcon /> </div>
         </div>
        </div>


     <Footer />
    </div>
  )

}

export default CartPage