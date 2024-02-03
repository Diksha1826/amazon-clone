import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import "./Checkout.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const [disable, setDisable] = useState(true);
  const [lastDisable, setLastDisable] = useState(true);
  const [totalPrice , setTotalPrice] = useState("");
  const [totalItem , setTotalItem] = useState("");
  const [subTotal , setSubTotal] = useState("");
  const navigate = useNavigate()


  useEffect(()=>{
  const totalItems = JSON.parse(localStorage.getItem("totalItems"));
  const totalBill = JSON.parse(localStorage.getItem("totalBill")); 
  setTotalPrice(totalBill);
  setTotalItem(totalItems);
  const subTtl = Number(totalBill) + 100 
  setSubTotal(subTtl); 

  })



  return (
    <div className="checkoutmain">
      <div className="checkoutnav">
        <img
          alt="logoimg"
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png"
        />
        <h1>Checkout</h1>
        <LockIcon />
      </div>
      <div className="checkoutbody">
        <div className="accordian">

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon>
            <h2>1. Shipping Address</h2></AccordionSummary>
          <AccordionDetails>
            <h4 className="addnewaddress">Add a new address</h4>
            <form className="addressform" onSubmit={(e)=> e.preventDefault()}>
                <div>
                <label htmlFor="selecttag">Country/Region</label>
                <select required name="country" id="countryselecter">
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Africa">Africa</option>
                    <option value="United States">United States</option>
                    <option value="UAE">UAE</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Korea">Korea</option>
                </select>
                </div>
                <div>
                    <label htmlFor="">Full name (First and Last name)</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <input required type="number" />
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input required type="text" className="addressinput"  placeholder="Street address or P.O. Box"/>
                    <input required type="text" placeholder="Apt, suite, unit, bulding, floor,etc." />
                </div>
                <div className="flexcity">
                <div>
                    <label htmlFor="">City</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">State</label>
                    <select required name="state" id="state">
                        <option value="Select">Select</option>
                        <option value="Arunchal Pradesh">Arunchal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttrakhand">Uttrakhand</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">ZIP Code</label>
                    <input type="number" />
                </div>

                </div>
                <div className="checkboxaddress">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <p>Make this my default address</p>
                </div>
                <input className="submit" onClick={() => setDisable(false) } type="submit" value="Use this address" />
            </form>
          </AccordionDetails>
        </Accordion>
      {disable ? (
        <Accordion disabled   >
          <AccordionSummary expandIcon><h2>2. Select a payment method</h2></AccordionSummary>
        </Accordion>
      ) : (
        <Accordion expanded>
          <AccordionSummary expandIcon><h2>2. Select a payment method</h2></AccordionSummary>
          <AccordionDetails>
            <h4>Your available balance</h4>
            <hr />
            <div className="avaibalance">
            <input type="number" placeholder="Enter Code" />
            <button>Apply</button>
            </div>
            <h4>Another payment method</h4>
            <hr />
            <div className="creditcard cards">
            <input type="radio" name="credit" id="credit" />
             <p>Credit or debit card</p>
            </div>
            <div className="cardsimg">
              <img src="https://m.media-amazon.com/images/G/31/payments-portal/r1/issuer-images/sprite-map._CB443317321_.png" alt="" />
            </div>
            <div className="creditcard cards">
            <input type="radio" name="credit" id="credit" />
             <p>Net banking</p>
            </div>
             <select name="netbank" id="bankselect">
              <option value="Choose">Choose an Option</option>
              <option value="Airtel Payments Bank">Airtel Payments Bank</option>
              <option value="Axis Bank">Axis Bank</option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="ICICI Bank">ICICI Bank</option>
              <option value="Kotak Bank">Kotak Bank</option>
              <option value="State Bank of India">State Bank of India</option>
              <option value="Allahabad Bank">Allahabad Bank</option>
              <option value="Andra Bank">Andra Bank</option>
              <option value="Bank of India">Bank of India</option>
              <option value="Bank of Maharashtra">Bank of Maharashtra</option>
             </select>
            <div className="creditcard">
            <input type="radio" name="credit" id="credit" />
             <p>Other UPI apps</p>
            </div>
            <div className="creditcard">
            <input type="radio" name="credit" id="credit" />
             <p>EMI</p>
            </div>
            <div className="creditcard">
            <input type="radio" name="credit" id="credit" />
             <p>Cash on delivery/ Pay on delivery</p>
            </div>
            <button className="paymentbtn" onClick={() =>{ setLastDisable(false) }}>Use this payment method</button>
          </AccordionDetails>
        </Accordion>
      )}

      {lastDisable ? (
        <Accordion disabled>
          <AccordionSummary expandIcon>
            <h2>3. Select shipping option and place order</h2></AccordionSummary>
        </Accordion>
      ) : (
        <Accordion expanded >
          <AccordionSummary expandIcon>
          <h2>3. Select shipping option and place order</h2>
          </AccordionSummary>
          <AccordionDetails>
             <h4 className="option">Choose your shipping option</h4>
             <ul >
              <li className="li">Ethnomusicology: A Very Short Introduction (Very Short Introduction)</li>
             </ul>
             <h4 className="option">Choose a delivery option:</h4>
             <div>
              <div className="shippingradioone">
                <input type="radio" name="" className="shippingradio" />
                <p>FREE Prime Delivery with a free trial </p>
              </div>
              <div className="shippingradioone">
                <input type="radio" name="" className="shippingradio" />
                <p> Tuesday, Jan. 21 </p>
              </div>
              <div className="shippingradioone">
                <input type="radio" name="" className="shippingradio" />
                <p>Sunday, Jan. 19 </p>
              </div>
             </div>
             <button onClick={()=>navigate('/orderplaced')} className="placeorder">Place Order</button>
          </AccordionDetails>
        </Accordion>
      )}

      <p className="bottonpara onecheckoutpara">Need help? Check our help pages or contact us</p>
      <p className="bottonpara">When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method ( credit card , debit card or net banking ), you will be directed to your bank's website to complete your payment. Your contract to purchase a item will not be complete until we receive your electronic payment and dispatch your item. if you choose to pay using pay on Delivery(POD), you can pay using cash/card/net banking when you receive your item.</p>
      <p className="bottonpara">See Amazon.in's Return Policy</p>
      <p className="bottonpara">Need to add more items to your order? Continue shopping on the <span className="tohome" onClick={()=>navigate('/')}> Amazon.in homepage</span></p>


        </div>
        <div className="ordersummary">
        <div className="ordersummarycontainer">
          <h2 className="ordersummaryheading">Order summary</h2>
          <div>
            <p>Items({totalItem}):</p>
            <p>₹{totalPrice}.00</p>
          </div>
          <div>
            <p>Delivery:</p>
            <p>₹100.00</p>
          </div>
          <div>
            <p>Total:</p>
            <p>₹{subTotal}.00</p>
          </div>
          <div>
            <p>Promotion Applied:</p>
            <p>-₹100.00</p>
          </div>
          <hr className="longhr" />
          <div className="pricetotalred">
            <h2>Order Total:</h2>
            <h2>₹{totalPrice}.00</h2>
          </div>
          <hr className="shorthr" />
          </div>  
          <div className="howcostcal">
            <p>How are delivery costs calculated?</p>
          </div>
        
        </div>
     </div>
    </div>
  );
};

export default Checkout;
