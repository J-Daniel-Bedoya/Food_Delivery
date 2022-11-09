import React from 'react';
import marcacionNumeros from '../../../../public/numeros.json';



const Marcacion = () => {
  return (
    <>
    <div className='marcacion'>
      {
        marcacionNumeros.map(num => (
          <button className='marcacion__btn' key={num}>{num}</button>
        ))
      }

    </div>
    </>
  )
}

export default Marcacion
