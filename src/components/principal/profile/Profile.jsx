import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useDispatch, useSelector } from 'react-redux';
import { actionLogoutAsync } from "../../../redux/actions/userActions";

const Profile = () => {

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };

  const userStore = useSelector((store) => store.userStore);

  const [info, setInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const {
        displayName,
        email,
        phoneNumber,
        photoURL,
      } = user?.auth.currentUser;
      setInfo({displayName, email, phoneNumber, photoURL})
    });
    
  }, [userStore]);
  console.log(info)


  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__container--img'>
          <div className='img' style={{backgroundImage: `url(${info.photoURL})`}}></div>
          <p>{info.displayName}</p>
        </div>
        <div>
          <button onClick={logOut}>Logout</button>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Profile
