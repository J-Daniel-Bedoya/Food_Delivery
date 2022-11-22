import React from 'react';
import imgSlice1 from '../../../assets/imgs/svg/Svg0.svg';
import img_slice1 from '../../../assets/imgs/svg/Slide1.svg';



const Slice1 = () => {
  return (
    <div className='slice1'>
      <img src={imgSlice1} alt="" className='imgSlice1' />
      <p className='title_slice1'>Choose what to eat choosing from <br/> a variety of restaurants from the list</p>
      <img src={img_slice1} alt="" className='img_slice1' />
    </div>
  )
}

export default Slice1;
