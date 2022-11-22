import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import SlicePagina from './components/carrusel/SlicePagina';
import HomePagina from './components/principal/home/Home';
import SearchPage from './components/principal/search/Search';
import RestaurantPage from './components/principal/home/RestaurantPage';
import ManageAddress from './components/principal/home/ManageAddress';
import OrderHistory from './components/principal/ordersHistory/OrderHistory';
import Profile from './components/principal/profile/Profile';

import ProductPage from './components/principal/home/ProductPage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Register from "./components/autenticación/Register";
import PrivateRouter from "./components/routes/PrivateRouter";
import PublicRouter from "./components/routes/PublicRouter";

import { useDispatch, useSelector } from "react-redux";
import { actionLoginSync } from "./redux/actions/userActions";
import Login from "./components/autenticación/Login";

function App() {

  const [time, setTime] = useState(false);

  setTimeout(() => {
    setTime(true)
  }, 4000)


  const [id, setId] = useState(0);
  const product = (id, i) => {
    setId(id);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const dispatch = useDispatch()

  const userStore = useSelector((store) => store.userStore);
  
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      if (Object.entries(userStore).length === 0) {
        const {
          displayName,
          email,
          phoneNumber,
          accessToken,
          photoURL,
          uid,
        } = user?.auth.currentUser;
        // console.log(email)
        dispatch(
          actionLoginSync({
            name: displayName,
            email,
            accessToken,
            phoneNumber,
            avatar: photoURL,
            uid,
            error: false,
          })
        );
      }

    }

    );
  }, [setIsLoggedIn, dispatch, userStore]);

  return (
    <HashRouter>
      <>
      {
        time ? (
          <div className="App">
            <Routes>

              {/* <Navigationbar isAuthentication={isLoggedIn} /> */}

              <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
                <Route path='/Home' element={<HomePagina/>}/>
                <Route path='/Search' element={<SearchPage/>}/>
                <Route path='/OrderHistory' element={<OrderHistory />}/>
                <Route path='/Profile' element={<Profile />}/>
                

                <Route path='/Home/RestaurantPage/:id' element={<RestaurantPage product={product}/>}/>
                <Route path='/Home/RestaurantPage/:id/product/:id' element={<ProductPage idArray={id}/>}/>
                <Route path='/Home/ManageAddress' element={<ManageAddress />}/>
              </Route>

              <Route path='/' element={<SlicePagina />}/>

            </Routes>

          </div>
        ) : (
          <Loader />
        )
      }
      </>
      </HashRouter>
  )
}

export default App

