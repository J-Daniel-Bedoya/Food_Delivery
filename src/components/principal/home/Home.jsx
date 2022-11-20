import React from 'react';
import img_ubicacion from '../../../assets/imgs/svg/Ubicacion.svg';
import img_Cupon1 from '../../../assets/imgs/svg/Cupon1.svg';
import img_Cupon2 from '../../../assets/imgs/svg/Cupon2.svg';
import img_Categoria1 from '../../../assets/imgs/svg/Categoria1.svg';
import img_Categoria2 from '../../../assets/imgs/svg/Categoria2.svg';
import img_Categoria3 from '../../../assets/imgs/svg/Categoria3.svg';
import img_restaurante1 from '../../../assets/imgs/svg/Restaurante1.svg';
import img_calificacion1 from '../../../assets/imgs/svg/Restaurante1_calificacion.svg';
import img_restaurante2 from '../../../assets/imgs/svg/Restaurante2.svg';
import img_calificacion2 from '../../../assets/imgs/svg/Restaurante2_calificacion.svg';
import img_restaurante3 from '../../../assets/imgs/svg/Restaurante3.svg';
import img_calificacion3 from '../../../assets/imgs/svg/Restaurante3_calificacion.svg';
import img_restaurante4 from '../../../assets/imgs/svg/Restaurante4.svg';
import img_calificacion4 from '../../../assets/imgs/svg/Restaurante4_calificacion.svg';

import img_SlideHome from '../../../assets/imgs/svg/Slide_home.svg';
import img_SlideSearch from '../../../assets/imgs/svg/Slide_search.svg';
import img_SlideTime from '../../../assets/imgs/svg/Slide_time.svg';
import img_SlideProfile from '../../../assets/imgs/svg/Slide_profile.svg';

import { useNavigate } from 'react-router-dom';
import app from '../../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,
} from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';




const HomePagina = () => {
  const navigate = useNavigate();
  const db = getFirestore(app)
  const [lista, setLista] = useState();

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDocs(collection(db, 'stores'))
        const docs = []
        consulta.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
        }) 
        setLista(docs);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])
  console.log(lista)

  return (
    <>
    <div className=''>
     <div className='topHome' onClick={() => navigate("/Home/ManageAddress")}>
        <img src={img_ubicacion} alt="" className='img_ubicacion' />
        <div>
          <p>DELIVER TO</p>
          <p>Medellín, Antioquia</p>
        </div>
      </div>
      <div>
        <img src={img_Cupon1} alt="" className='img_Cupon1' />
        <img src={img_Cupon2} alt="" className='img_Cupon2' />
      </div>
      <div>
        <p>Restaurants and cafes</p>
        <div>
          <img src={img_Categoria1} alt="" className='img_Categoria1' />
          <img src={img_Categoria2} alt="" className='img_Categoria2' />
          <img src={img_Categoria3} alt="" className='img_Categoria3' />
        </div>
      </div>
      <div className='home_restaurante' onClick={() => navigate("/Home/RestaurantPage")}>
        <img src={img_restaurante1} alt="" className='img_restaurante1' />
        <div>
          <p>Pardes Restaurant</p>
          <img src={img_calificacion1} alt="" className='img_calificacion1' />
          <p>Work time 09:30 - 23:00</p>
          <p>Before you 4$</p>
        </div>
      </div>
      <div className='home_restaurante'>
        <img src={img_restaurante2} alt="" className='img_restaurante2' />
        <div>
          <p>Glamour Kafe</p>
          <img src={img_calificacion2} alt="" className='img_calificacion2' />
          <p>Work time 09:00 - 21:00</p>
          <p>Before you 13$</p>
        </div>
      </div>
      <div className='home_restaurante'>
        <img src={img_restaurante3} alt="" className='img_restaurante3' />
        <div>
          <p>Aromat Bakery</p>
          <img src={img_calificacion3} alt="" className='img_calificacion3' />
          <p>Work time 09:00 - 22:00</p>
          <p>Before you 3$</p>
        </div>
      </div>
      <div className='home_restaurante'>
        <img src={img_restaurante4} alt="" className='img_restaurante4' />
        <div>
          <p>Aromat Bakery</p>
          <img src={img_calificacion4} alt="" className='img_calificacion4' />
          <p>Work time 09:00 - 22:00</p>
          <p>Before you 3$</p>
        </div>
      </div>
      <div>
          <img src={img_SlideHome} alt="" className='img_SlideHome' />
          <img src={img_SlideSearch} alt="" className='img_SlideSearch' onClick={() => navigate("/Search")}/>
          <img src={img_SlideTime} alt="" className='img_SlideTime' onClick={() => navigate("/OrderHistory")}/>
          <img src={img_SlideProfile} alt="" className='img_SlideProfile' onClick={() => navigate("/Profile")}/>
      </div>


    </div>

    </>
  )
}

export default HomePagina;

