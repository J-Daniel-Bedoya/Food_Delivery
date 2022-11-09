import React from 'react'
import imgVerificacion from '../../../assets/imgs/svg/Autentificacion.svg'

const Verificacion = () => {
  return (
    <div>
      <div>
        <img src={imgVerificacion} alt="" className='imgVerificacion' />
        <p className='title_verificacion'>Verificacion</p>
        <p className='txt_verificacion'>Enter the four-digit code from SMS <br/> SMS not received.Send again?</p>
        <div className='input_login'>
          <input className='input_ver1'></input>
          <input className='input_ver1'></input>
          <input className='input_ver1'></input>
          <input className='input_ver1'></input>
        </div>
      </div>
    </div>
  )
}

export default Verificacion
