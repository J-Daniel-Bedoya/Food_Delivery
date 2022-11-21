import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className='profile'>
      <div className='profile__container'>
        Hola profile
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Profile
