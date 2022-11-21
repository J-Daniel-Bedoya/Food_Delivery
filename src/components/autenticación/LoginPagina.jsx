import React, { useEffect, useState } from 'react'
import { setConfirm } from '../../store/slices/confirm.slice'
import CrearCuenta from './login/CrearCuenta'
import Direccion from './login/Direccion'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const LoginPagina = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contador, setContador] = useState(1);
  // const [cambiarEstadoDelBtn, setCambiarEstadoDelBtn] = useState(true)
  const cambioDePaginas = () => {
    switch (contador) {
      // case 1:
      //   return <SingIn />
      // case 2:
      //   return <Verificacion />
      case 1:
        return <CrearCuenta />
      case 2:
        return <Direccion />
    }
  }
  const confirm = () => {
    setContador(contador+1)
    if(contador === 2) {
      dispatch(setConfirm())
    }
  }
  // useEffect(() => {
  //   if(contador === 2) {
  //     setCambiarEstadoDelBtn(false)
  //   }else {
  //     setCambiarEstadoDelBtn(true)
  //   }
  // }, [contador])

  return (
    <div className='login_pagina'>
      <div className='login_pagina__cotenido'>
        {cambioDePaginas()}
        {/* <button onClick={() => setContador(contador+1)}>Siguiente</button> */}
      </div>
      <div className='login_pagina__btn'>
        {/* {
          cambiarEstadoDelBtn ? ( */}
          <button className='login__btn' onClick={() => confirm()}>
            {
              contador === 1 ? "Sing in" : contador === 2 ? "Confirm" : navigate("/home")
            }
          </button>
          {/* ) : (
            <Marcacion setContador={setContador} contador={contador}/>
          )
        } */}
      </div>
    </div>
  )
}

export default LoginPagina
