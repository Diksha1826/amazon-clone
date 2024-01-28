import React, { useState } from 'react';
import './Password.css'
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const [userPassword , setPassword] = useState("");
    const navigate = useNavigate();
   
   
    const signinuser = ()=>{
        const currentuser = JSON.parse(localStorage.getItem("currentuser"));
        const usersdata = JSON.parse(localStorage.getItem("usersdetail"));
        
        for(let i=0;i<usersdata.length;i++){
            if(usersdata[i].email === currentuser && usersdata[i].password === userPassword ){
                    localStorage.setItem("isAuth" , JSON.stringify(true)); 
                    navigate('/');
                    return;
                }
            }
            alert("Wrong Password")
 }

  return (
    <div>
    <div className="signincontainer">
    <div className='Signinpagelogotop'>
      <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png" alt="img" />
    </div>
    <div className="signinform">
    <div className="signinpageform">
      <h3>Password</h3>
      <div className="emailorphone">
      <label htmlFor="" >Password</label>
      <input type="Password" onChange={(e)=> setPassword(e.target.value)} />
      </div>
      <button className="signincontinue" onClick={signinuser}>Continue</button>
      <p className='policypara'>by continuing, you agree to amazon's Condition of use and privacy notice</p>
      <hr />
      <p><b>Buying for work?</b></p>
      <p className='amazonbusiness'>Shop on Amazon Business</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Password