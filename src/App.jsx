import { useState } from 'react'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import SlicePagina from './components/carrusel/SlicePagina';
import LoginPagina from './components/autenticación/LoginPagina';
import HomePagina from './components/principal/Home';
import SearchPage from './components/principal/Search';



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
              <Route path='/login' element={<LoginPagina />}/>
              <Route path='/Home' element={<HomePagina/>}/>
              <Route path='/Search' element={<SearchPage/>}/>

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
