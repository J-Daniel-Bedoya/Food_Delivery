import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import marcacionNumeros from '../../../../public/numeros.json';
import { setPasarMarcacion } from '../../../store/slices/pasarMarcacion.slice';


const Marcacion = ({setContador, contador}) => {
  const dispatch = useDispatch();
  const numMarcacion = 2340;
  // const [arrMarcaciones, setArrMarcaciones] = useState([])
  // const arrMarcaciones = useSelector(state => state.pasarMarcacion);
  // console.log(arrMarcaciones)


  // const marcar = (num) => {

    
  //   const arrNum = numMarcacion.toString().split();
  //   // const a = numMarcacion.toString();

  //   arrNum.forEach(arr => {
  //     const l = Number(arr);
  //     const f = arrMarcaciones.includes(arr);
  //     console.log(f)
  //   })
  //   console.log(a.split(""))
  // }
  return (
    <>
    <div className='marcacion'>
      {
        marcacionNumeros.map(num => (
          // <button onClick={() => marcar(num)} className='marcacion__btn' key={num}>{num}</button>
          <button onClick={() => dispatch(setPasarMarcacion(num))} className='marcacion__btn' key={num}>{num}</button>
        ))
      }

    </div>
    </>
  )
}

export default Marcacion
