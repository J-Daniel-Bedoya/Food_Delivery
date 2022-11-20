import { useState } from 'react'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import SlicePagina from './components/carrusel/SlicePagina';
import LoginPagina from './components/autenticación/LoginPagina';
import HomePagina from './components/principal/home/Home';
import SearchPage from './components/principal/search/Search';
import RestaurantPage from './components/principal/home/RestaurantPage';
import ManageAddress from './components/principal/home/ManageAddress';
import OrderHistory from './components/principal/ordersHistory/OrderHistory';
import Profile from './components/principal/profile/Profile';

import app from './firebase/firebaseConfig';



function App() {

  const [time, setTime] = useState(false);

  setTimeout(() => {
    setTime(true)
  }, 4000)
  return (
    <HashRouter>
      <>
      {
        time ? (
          <div className="App">
            <Routes>
    
              <Route path='/' element={<SlicePagina />}/>
              <Route path='/login' element={<LoginPagina />}/>s
              <Route path='/Home' element={<HomePagina/>}/>
              <Route path='/Search' element={<SearchPage/>}/>
              <Route path='/OrderHistory' element={<OrderHistory />}/>
              <Route path='/Profile' element={<Profile />}/>
              

              <Route path='/Home/RestaurantPage' element={<RestaurantPage />}/>
              <Route path='/Home/ManageAddress' element={<ManageAddress />}/>

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
