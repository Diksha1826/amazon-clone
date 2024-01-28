import React, { useState } from 'react'
import './Joinus.css'
import { useNavigate } from 'react-router-dom'

const Joinus = () => {
  const [joinusEmail , setJoinusEmail] = useState("");
  const [joinusPassword , setJoinusPassword] = useState("");
  const navigate = useNavigate()


  const setdatatolocal=()=>{
    let obj = {
      email: joinusEmail ,
      password: joinusPassword 
    }
    let arr =  JSON.parse(localStorage.getItem("usersdetail")) || [] ;
    arr.push(obj);
    localStorage.setItem("usersdetail" , JSON.stringify(arr));
    localStorage.setItem("isAuth" , JSON.stringify(true));
    navigate('/');
  }



  const gotosignin=()=>{
    navigate('/signin')

  }
  return (
    <div className='joinusmain'>
      <div className="joinuslogo">
        <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png" alt="logoimg" />
      </div>
      <div className="joinuscontain">
        <form className='joinusformform' action="">
        <div className="joinusform">
          <h3>Create Account</h3>
          <div className="yourname">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='First and last name' required />
          </div>
          <div className="yourmobilenumber">
            <label htmlFor="">Mobile Number</label>
            <input type="number" required />
          </div>
          <div className="youremail">
            <label htmlFor="">Email(optional)</label>
            <input type="email" required onChange={(e)=> setJoinusEmail(e.target.value)} />
          </div>
          <div className="yourpassowrd">
            <label htmlFor="">Password</label>
            <input type="password" required minLength={6} onChange={(e)=> setJoinusPassword(e.target.value)} />
          </div>
          <p className='atleastpass'>Password must be at least 6 characters.</p>
          <button className='joinusbtn' onClick={setdatatolocal}>Join us</button>
          
          <p className="alreadyhaveacct">
            Already have an account? <span onClick={gotosignin} className="signinfromjoinus"> Sign in</span>
          </p>
        </div>
        </form>
        <hr />
        <div className='signincondition'>
        <p>Condition of Use</p>
        <p>Privacy Notice</p>
        <p>Help</p>
      </div>
      <div className='copyright'><p> © 1996-2014,Amazon.com, Inc. or its affiliates</p></div>

      </div>

    </div>
  )
}

export default Joinus