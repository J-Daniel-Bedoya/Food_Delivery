import React from 'react'

const CrearCuenta = () => {
  return (
    <div>
      <p className='title_cuenta'>Create account</p>
      <form  className='input_cuenta'>
        <input placeholder='NAME'></input>
        <input placeholder='EMAIL'></input>
        <input placeholder='PASSWORD'></input>
      </form>
    </div>
  )
}

export default CrearCuenta
