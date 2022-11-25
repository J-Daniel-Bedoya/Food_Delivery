import { async } from '@firebase/util';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import app from '../../firebase/firebaseConfig';

const CreateRestaurant = () => {
  const { register, handleSubmit } = useForm();
  const [restaurant, setRestaurant] = useState();
  const db = getFirestore(app)
  const onSubmit = async (form) => {
    console.log(form);
    try {
      await addDoc(collection(db, 'stores'), {
        ...form
      })
    } catch (error) {
      throw (error)
    }
  }
  const onSubmitRestaurant = (form) => {
    setRestaurant(form)
  }

  const onSubmitMenu = (form) => {
    restaurant.menus = form 
    onSubmit(restaurant)
  }
  return (
    <div className='createAdmin'>
      <div className='info_createAdmin'> 
        <form onSubmit={handleSubmit(onSubmitRestaurant)}>
          <div className='details_createAdmin'>
            <label htmlFor='name'> Name </label>
              <input type="text" id={"name"}{...register("name")} />
          </div>
          <div className='details_createAdmin'>
            <label htmlFor='stars'> Stars </label>
            <input type={"number"} id={"stars"}{...register("stars")} />
          </div>
          <div className='details_createAdmin'>
            <label> Description </label>
              <input type="text" {...register("description")} />
          </div>
          <div className='details_createAdmin'>
            <label> Work Time Start </label>
            <input type="text" {...register("workTimeStart")} />
          </div>
          <div className='details_createAdmin'>
            <label> Work Time Finalice </label>
            <input type="text" {...register("workTimeFinalice")} />
          </div>
          <div className='details_createAdmin'>
            <label> Image </label>
            <input type="text" {...register("image")} />
          </div>
          <div className='details_createAdmin'>
            <label> Image logo </label>
            <input type="text" {...register("imageLogo")} />
          </div>
          <div className='details_createAdmin'>
            <label> Before You </label>
            <input type="text" {...register("beforeYou")} />
          </div>
          <div className='details_createAdmin'>
            <button className='btn_create' type={"submit"}>Create</button>
          </div>
        </form>

        <form onSubmit={handleSubmit(onSubmitMenu)}></form>
      </div>
    </div>
  )
}

export default CreateRestaurant
