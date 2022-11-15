import React from 'react'
import imgSingin from '../../../assets/imgs/svg/Autentificacion.svg'
import imgTel from '../../../assets/imgs/svg/Svg3.svg'


const SingIn = () => {
  return (
    <div className='singin'>
      <img src={imgSingin} alt="" className='imgSingin' />
      <p className='title_singin'>Sing in</p>
      <p className='txt_singin'>Login or create an account with your <br/>  phone number to start ordering</p>
      <div className='txt_number'>
        <img src={imgTel} alt="" className='imgTel'/>
        <p>+ 57</p>
        <input type={"number"} className='input_number'></input>
      </div>
    </div>
  )
}

export default SingIn
