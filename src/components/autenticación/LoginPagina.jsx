import React, { useEffect, useState } from 'react'
import CrearCuenta from './login/CrearCuenta'
import Direccion from './login/Direccion'
import Marcacion from './login/Marcacion'
import SingIn from './login/SingIn'
import Verificacion from './login/Verificacion'
import imgMarcacion from '../../assets/imgs/svg/Autentificacion.svg'


const LoginPagina = () => {
  const [contador, setContador] = useState(1);
  const [cambiarEstadoDelBtn, setCambiarEstadoDelBtn] = useState(true)
  const cambioDePaginas = () => {
    switch (contador) {
      case 1:
        return <SingIn />
      case 2:
        return <Verificacion />
      case 3:
        return <CrearCuenta />
      case 4:
        return <Direccion />
    }
  }

  useEffect(() => {
    if(contador === 2) {
      setCambiarEstadoDelBtn(false)
    }else {
      setCambiarEstadoDelBtn(true)
    }
  }, [contador])

  return (
    <div className='login_pagina'>
      <div>
        <img src={imgMarcacion} alt="" className='imgMarcacion' />
        <p>Verificacion</p>
        <p>Enter the four-digit code from SMS SMS not received.Send again?</p>
        <div className='input_login'>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </div>
      </div>
      <div className='login_pagina__cotenido'>
        {cambioDePaginas()}
        <button onClick={() => setContador(contador+1)}>Siguiente</button>
      </div>
      <div className='login_pagina__btn'>
        {
          cambiarEstadoDelBtn ? (
          <button className='login__btn' onClick={() => setContador(contador+1)}>
            {
              contador === 1 ? "Login" : contador === 2 ? "" : contador === 3 ? "Sing in" : "Confirm"
            }
          </button>
          ) : (
            <Marcacion />
          )
        }
      </div>
    </div>
  )
}

export default LoginPagina
