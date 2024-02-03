import React from 'react'
import  './Orderplaced.css'
import { useNavigate } from 'react-router-dom'

const Orderplaced = () => {
  const navigate = useNavigate() ;
  const gotohome =()=>{
    navigate('/')
  }
  return (
    <div className="orderplaced">
        <h1>Thankyou for Shopping with us</h1>
        <img src="https://i.gifer.com/7efs.gif" alt="" />
         <p onClick={gotohome}>Goto home</p>
    </div>
  )
}

export default Orderplaced