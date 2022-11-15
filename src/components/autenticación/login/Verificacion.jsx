import React from 'react'
import { useSelector } from 'react-redux';
import imgVerificacion from '../../../assets/imgs/svg/Autentificacion.svg'

const Verificacion = () => {
  const arrMarcaciones = useSelector(state => state.pasarMarcacion);



  return (
    <div>
      <div>
        <img src={imgVerificacion} alt="" className='imgVerificacion' />
        <p className='title_verificacion'>Verificacion</p>
        <p className='txt_verificacion'>Enter the four-digit code from SMS <br/> SMS not received.Send again?</p>
        <div className='input_login'>
          {
            arrMarcaciones.map(arr => (
              <button className='verificacion__btn'>
                {
                  (arr === 2 && 2 )
                  (arr === 3 && 3 )
                }
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Verificacion
