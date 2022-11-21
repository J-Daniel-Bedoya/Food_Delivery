import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img_Categoria1 from '../../../assets/imgs/svg/Categoria1.svg';
import img_Categoria2 from '../../../assets/imgs/svg/Categoria2.svg';
import img_Categoria3 from '../../../assets/imgs/svg/Categoria3.svg';
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
// import React from 'react'
// import Flecha_atras from '../../../assets/imgs/png/flecha_atras.png'
// import Logo_restaurant1 from '../../../assets/imgs/svg/Logo_restaurant1.svg'
// import Img_restaurant1 from '../../../assets/imgs/svg/Img_restaurant1.svg'
// import Stars_restaurant1 from '../../../assets/imgs/svg/Stars_restaurant1.svg'

// import menu1_restaurant1 from '../../../assets/imgs/png/menu_restaurant1/menu1_restaurant1.png'
// import menu2_restaurant1 from '../../../assets/imgs/png/menu_restaurant1/menu2_restaurant1.png'
// import menu3_restaurant1 from '../../../assets/imgs/png/menu_restaurant1/menu3_restaurant1.png'
// import menu4_restaurant1 from '../../../assets/imgs/png/menu_restaurant1/menu4_restaurant1.png'
// import menu5_restaurant1 from '../../../assets/imgs/png/menu_restaurant1/menu5_restaurant1.png'
// import menu6_restaurant1 from '../../../assets/imgs/png/menu_restaurant1/menu6_restaurant1.png'


const RestaurantPage = ({product}) => {

  const navigate = useNavigate();
  const { id } = useParams();

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
        setLista(docs[id-1]);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])
  console.log(lista)
  return (
    <div className='restaurantPage'>
      <div className='restaurantPage__description'>
        <button className='restaurantPage__description--btn'>{"<"}</button>
        <div className='restaurantPage__description--logo'>
          <img src={lista?.imgLogo} alt={"logo"} style={{padding: "2rem 0"}}/>
        </div>
        <div className='restaurantPage__description--text'>
          <img src={lista?.image} alt="" />
          <div>
            <p>{lista?.name}</p>
            <p>{lista?.description}</p>
            <div className='restaurantPage__description--stars'>
              <img src={lista?.stars} alt="stars" />
              <p className='restaurantPage__description--time'>{lista?.menus[0].time}</p>
            </div>
          </div>
        </div>
        <br />
        <div className='categorias'>
          <img src={img_Categoria1} alt="" className='img_Categoria1' />
          <img src={img_Categoria2} alt="" className='img_Categoria2' />
          <img src={img_Categoria3} alt="" className='img_Categoria3' />
        </div>
      </div>
      <div className='restaurantPage__menu'>
        {
          lista?.menus.map((menu, i) => (
            <div key={menu.img} onClick={() => product(id-1)}>
              <div 
                onClick={() => navigate(`/Home/RestaurantPage/${id}/product/${i+1}`)}
                className='restaurantPage__menu--container'
              >
                <img src={menu.img} alt={menu.name} className='restaurantPage__menu--img'/>
                <div>
                  <p>{menu.name}</p>
                  <p>{menu.price}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    {/* <>
    <div className='top_restPage'>
        <img src={Flecha_atras} alt="" className='flecha_atras' />
        <img src={Logo_restaurant1} alt="" className='Logo_restaurant1' />
    </div>
    <div className='info_restaurant1'>
        <img src={Img_restaurant1} alt="" className='Img_restaurant1' />
        <div className='main_restaurant1'>
            <p className='title_restaurant1'>Pardes Restaurant</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className='details_restaurant1'>
            <img src={Stars_restaurant1} alt="" className='Stars_restaurant1' />
            <p>15-20 min</p>
            </div>
        </div>
    </div>
    <div className='btn_filtrosMenu'>
        <button>ALL</button>
        <button>SALATES</button>
        <button>PIZZA</button>
    </div>
    <div className='restaurant1_menu'>
        <div>
            <img src={menu1_restaurant1} alt="" className='menu1_restaurant1' />
            <p>Bolognese salad</p>
            <p>$ 14.45</p>
        </div>
        <div>
            <img src={menu2_restaurant1} alt="" className='menu2_restaurant1' />
            <p>Bolognese salad</p>
            <p>$ 19.05</p>
        </div>
        <div>
            <img src={menu3_restaurant1} alt="" className='menu3_restaurant1' />
            <p>Caesar salad</p>
            <p>$ 17.45</p>
        </div>
        <div>
            <img src={menu4_restaurant1} alt="" className='menu4_restaurant1' />
            <p>Pizza Pardes </p>
            <p>$ 22.45</p>
        </div>
        <div>
            <img src={menu5_restaurant1} alt="" className='menu4_restaurant1' />
            <p>Pizza Premiun</p>
            <p>$ 24.50</p>
        </div>
        <div>
            <img src={menu6_restaurant1} alt="" className='menu6_restaurant1' />
            <p>Pizza Basic </p>
            <p>$ 20.25</p>
        </div>
    </div>

</> */}
</div>
  )
}

export default RestaurantPage
