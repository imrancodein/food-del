import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
 <form className='place-order'>
  <div className="place-order-left">
    <p className="title">
      Delevary Information
    </p>
    <div className="multifield">
      <input type="text" placeholder='enter first name' />
      <input type="text" placeholder='enter last name' />
    </div>
    <input type="email"  placeholder='enter your email'/>
    <input type="text" placeholder='street' />

     <div className="multifield">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
    </div>

     <div className="multifield">
      <input type="text" placeholder='Zip code' />
      <input type="text" placeholder='Country' />
    </div>
    <input type="text" placeholder='phone' />
  </div>

  {/* right order section */}
  <div className="place-order-right">
     <div className="cart-total">
          <h2>Cart Totals</h2>
         
        
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>Rs{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delevery Fee</p>
          <p>Rs{getTotalCartAmount()===0?0:20}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>Rs{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
        </div>
      <button >PROCEED TO PAYMENT</button>
        </div>
  </div>
  

 </form>
  )
}

export default PlaceOrder
