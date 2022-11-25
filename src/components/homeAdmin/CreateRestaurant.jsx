import { async } from '@firebase/util';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useForm } from 'react-hook-form'
import app from '../../firebase/firebaseConfig';

const CreateRestaurant = () => {
  const { register, handleSubmit } = useForm();
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

  return (
    <div>
      <div className='info_createAdmin'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='details_createAdmin'>
            <label> Name {" "}
              <input type="text" {...register("name")} />
            </label>
          </div>
          <div className='details_createAdmin1'>
            <label> Stars {" "}
              <input type={"number"} {...register("stars")} />
            </label>
          </div>
          <div className='details_createAdmin2'>
            <label> Description {" "}
              <input type="text" {...register("description")} />
            </label>
          </div>
          <div className='details_createAdmin3'>
            <label> Work Time Start {" "}
              <input type="text" {...register("workTimeStart")} />
            </label>
          </div>
          <div className='details_createAdmin4'>
            <label> Work Time Finalice {" "}
              <input type="text" {...register("workTimeFinalice")} />
            </label>
          </div>
          <div className='details_createAdmin5'>
            <label> Image {" "}
              <input type="text" {...register("image")} />
            </label>
          </div>
          <div className='details_createAdmin6'>
            <label> Image logo {" "}
              <input type="text" {...register("imageLogo")} />
            </label>
          </div>
          <div className='details_createAdmin7'>
            <label> Before You {" "}
              <input type="text" {...register("beforeYou")} />
            </label>
          </div>
          <div>
            <button className='btn_create' type={"submit"}>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRestaurant
