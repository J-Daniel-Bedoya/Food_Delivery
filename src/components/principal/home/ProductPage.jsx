import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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


const ProductPage = ({idArray}) => {
  // const navigate = useNavigate();
  const { id } = useParams();
  
  const db = getFirestore(app)
  const [menu, setMenu] = useState();

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDocs(collection(db, 'stores'))
        const docs = []
        consulta.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
        }) 
        setMenu(docs[idArray].menus[id-1]);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])
  console.log(menu)

  return (
    <div className='product'>
      <div className='product__img' style={{backgroundImage: `url(${menu?.img})`}}></div>
      <div>
        <div className='product__title'>
          <b>{menu?.name}</b>
          <p>{menu?.time}</p> 
        </div>
        <p className='product__description'>{menu?.description}</p>
      </div>
      <div className='product__aditionalIngredients'>
        <h4>Aditonal Ingredients</h4>
        {
          menu?.aditonalIngredients?.map((ing, i) => (
            <div key={i} className='product__aditionalIngredients--ing'>
              <div>
                <input type={"checkbox"} id={"aditionalIngredients"} />
                <label htmlFor="aditionalIngredients"> {ing}</label>
              </div>  
              <div>
                +{Math.floor(Math.random() * 10)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductPage
