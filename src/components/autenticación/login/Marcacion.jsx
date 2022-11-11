import React, { useEffect, useState } from 'react';
import marcacionNumeros from '../../../../public/numeros.json';



const Marcacion = ({setContador, contador}) => {
  const numMarcacion = 2340;
  const [arrMarcaciones, setArrMarcaciones] = useState([])
  console.log(arrMarcaciones)
  useEffect(() => {
    if (arrMarcaciones.length >= 4){
      marcar();
    }
  },[arrMarcaciones])

  const marcar = () => {
    const arrNum = numMarcacion.toString().split();
    // const a = numMarcacion.toString();

    arrNum.forEach(arr => {
      // const l = Number(arr);
      const f = arrMarcaciones.includes(arr);
      console.log(f)
    })
    // console.log(a.split(""))
  }
  return (
    <>
    <div className='marcacion'>
      {
        marcacionNumeros.map(num => (
          <button onClick={() => setArrMarcaciones([...arrMarcaciones, num])} className='marcacion__btn' key={num}>{num}</button>
        ))
      }

    </div>
    </>
  )
}

export default Marcacion
