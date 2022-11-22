import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
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

const OrderList = () => {

  const price = useSelector(state => state.priceOrder);
  const { id } = useParams();

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
        setLista(docs[0].menus[id-1]);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])
  console.log(lista)

  return (
    <div>
      <h3>New order</h3>
      {/* <div style={{backgroundImage: `url(${lista.image})`}}></div> */}
      <img src={lista?.img} alt="" />
      <p>{lista?.name}</p>
      <b>$ {price}</b>
    </div>
  )
}

export default OrderList;