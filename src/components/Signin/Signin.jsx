import React, { useState } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [userEmail, setuserEmail]= useState("")
  const navigate = useNavigate();
  const gotojoinus=()=>{
    navigate('/joinus')
  }

  const signinuser=()=>{
    const usersdata = JSON.parse(localStorage.getItem("usersdetail"));
    let flag = false ;
    for(var i=0;i<usersdata.length;i++){
      if(usersdata[i].email === userEmail){
        flag = true;
        break;
      }
    }
    if(flag === true){
      localStorage.setItem( "currentuser" , JSON.stringify(userEmail));
      navigate('/password');
    }
    else{
      alert("User Doesn't Exist");
    }
  }

  return (
    <div className="signincontainer">
      <div className='Signinpagelogotop'>
        <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png" alt="img" />
      </div>
      <div className="signinform">
      <div className="signinpageform">
        <h3>Sign in</h3>
        <div className="emailorphone">
        <label htmlFor="" >Email or mobile phone no</label>
        <input type="text" onChange={(e)=> setuserEmail(e.target.value)} />
        </div>
        <button className="signincontinue" onClick={signinuser}>Continue</button>
        <p className='policypara'>by continuing, you agree to amazon's Condition of use and privacy notice</p>
        <hr />
        <p><b>Buying for work?</b></p>
        <p className='amazonbusiness'>Shop on Amazon Business</p>
      </div>
      <div className='newtoamazon'>
      <p>New to Amazon?</p>
      <button onClick={gotojoinus}>Create your Amazon Account</button>
      </div>
      </div>
      <hr />
      <div className='signincondition'>
        <p>Condition of Use</p>
        <p>Privacy Notice</p>
        <p>Help</p>
      </div>
      <div className='copyright'><p> © 1996-2014,Amazon.com, Inc. or its affiliates</p></div>
    </div>
  )
}

export default Signin