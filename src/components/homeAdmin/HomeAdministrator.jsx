import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import app from '../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,
} from 'firebase/firestore';
import Footer from '../principal/footer/Footer'; 



const HomeAdministrator = () => {
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
  

  return (
    <div className='homeAdmin'>
      <div>

      </div>
      <div>
        <button className='createRestaurant' onClick={() => navigate("/Home/create")}>Create new restaurant</button>
      </div>
    </div>
  )
}

export default HomeAdministrator;