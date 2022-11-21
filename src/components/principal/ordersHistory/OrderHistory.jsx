import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

const OrderHistory = () => {
  const navigate = useNavigate();
  return (
    <div className='orderHistory'>
      <div className='orderHistory__container'>
        Hola orders
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default OrderHistory
