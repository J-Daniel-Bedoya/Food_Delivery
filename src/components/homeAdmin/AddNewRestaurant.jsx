import React, { useState } from "react";
import CreateRestaurant from './CreateRestaurant'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../../firebase/firebaseConfig";
import CreateMenu from './CreateMenu';
import AditionalIngredients from "./AditionalIngredients";

const AddNewRestaurant = () => {
  const db = getFirestore(app);
  const onSubmit = async (form) => {
    console.log(form);
    try {
      await addDoc(collection(db, "stores"), {
        ...form,
      });
    } catch (error) {
      throw error;
    }
  };

  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  const [ingredients, setIngredients] = useState({});

  const onSubmitRestaurant = (form) => {
    setRestaurant(form);
  };
  
  const onSubmitMenu = (form) => {
    setMenu(form)
  };

  const onSubmitIngredients = (form) => {
    setIngredients(form)
  }
  console.log(restaurant)
  console.log(menu)
  console.log(ingredients)

  const createRestaurant = () => {
    menu.aditionalIngredients = ingredients;
    restaurant.menus = menu;
    console.log(restaurant)
    onSubmit(restaurant);
  }
  return (
    <div className="createAdmin">
      <CreateRestaurant onSubmitRestaurant={onSubmitRestaurant}/>
      <CreateMenu onSubmitMenu={onSubmitMenu}/>
      <AditionalIngredients onSubmitIngredients={onSubmitIngredients}/>
      <button onClick={() => createRestaurant()}>Crear Restaurante</button>
    </div>
  )
}

export default AddNewRestaurant
