import { async } from '@firebase/util';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useForm } from 'react-hook-form'
import app from '../../firebase/firebaseConfig';

const CreateRestaurant = () => {
  const { register, handleSubmit } = useForm();
  const db = getFirestore(app)
  const onSubmit = async(form) => {
    console.log(form);
    try {
      await addDoc(collection(db, 'stores'), {
        ...form
      })
    } catch (error) {
      throw(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name {" "}
          <input type="text" {...register("name")}/>
        </label>
        <br />
        <br />
        <label> Stars {" "}
          <input type={"number"} {...register("stars")}/>
        </label>
        <br />
        <br />
        <label> Description {" "}
          <input type="text" {...register("description")}/>
        </label>
        <br />
        <br />
        <label> Work Time Start {" "}
          <input type="text" {...register("workTimeStart")}/>
        </label>
        <br />
        <br />
        <label> Work Time Finalice {" "}
          <input type="text" {...register("workTimeFinalice")}/>
        </label>
        <br />
        <br />
        <label> Image {" "}
          <input type="text" {...register("image")}/>
        </label>
        <br />
        <br />
        <label> Image logo {" "}
          <input type="text" {...register("imageLogo")}/>
        </label>
        <br />
        <br />
        <label> Before You {" "}
          <input type="text" {...register("beforeYou")}/>
        </label>
        <br />
        <br />
        <div>
          <button type={"submit"}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateRestaurant
