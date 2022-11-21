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
import ProductPage from './components/principal/home/ProductPage';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';

function App() {

  const [time, setTime] = useState(false);

  setTimeout(() => {
    setTime(true)
  }, 4000)


  const [id, setId] = useState(0);
  const product = (id, i) => {
    setId(id);
  }

  return (
    <HashRouter>
      <>
      {
        time ? (
          <div className="App">
            <Routes>
    
              <Route path='/' element={<SlicePagina />}/>
              <Route path='/login' element={<LoginPagina />}/>s

              <Route element={<ProtectedRoutes />}>
                <Route path='/Home' element={<HomePagina/>}/>
                <Route path='/Search' element={<SearchPage/>}/>
                <Route path='/OrderHistory' element={<OrderHistory />}/>
                <Route path='/Profile' element={<Profile />}/>
                

                <Route path='/Home/RestaurantPage/:id' element={<RestaurantPage product={product}/>}/>
                <Route path='/Home/RestaurantPage/:id/product/:id' element={<ProductPage idArray={id}/>}/>
                <Route path='/Home/ManageAddress' element={<ManageAddress />}/>

              </Route>
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
