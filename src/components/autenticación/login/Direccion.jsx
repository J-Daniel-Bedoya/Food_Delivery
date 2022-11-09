import React from 'react';
import imgDireccion from '../../../assets/imgs/svg/map.svg'

const Direccion = () => {
  return (
    <div>
      <p className='txt_direccion'>Allow access to geo data on the device <br/> mark your address on the map</p>
      <img src={imgDireccion} alt="" className='imgDireccion' />
    </div>
  )
}

export default Direccion
