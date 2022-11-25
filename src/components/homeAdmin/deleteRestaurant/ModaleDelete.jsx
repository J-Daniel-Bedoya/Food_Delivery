import React from 'react'
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



const ModaleDelete = ({modale, setModale, id}) => {

  const db = getFirestore(app)
  const deleteRestaurant = async(id) => {
    try {
      await deleteDoc(doc(db, 'stores', id));
    } catch (error) {
      throw(error)
    }
  }
  const cerrar = () => {
    setModale(!modale)
  }
  // console.log(id)
  return (
    <div className='modaleDelete'>
      <div className='modaleDelete__container'>
        <p>¿Deseas eliminar este restaurante?</p>
        <button onClick={() => deleteRestaurant(id)}>Yes</button>
        <button onClick={() => cerrar()}>Cerrar</button>
      </div>

    </div>
  )
}

export default ModaleDelete;
