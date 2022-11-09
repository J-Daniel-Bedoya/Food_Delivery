import React from 'react'
import Imgslide2 from '../../../assets/imgs/svg/Svg1.svg';
import img_slice1 from '../../../assets/imgs/svg/Slide2.svg';

const Slice2 = () => {
  return (
    <div>
      <img src={Imgslide2} alt="" className='Imgslide2' />
      <p className='title_slice2'>Choose where you want to deliver <br/> by indicating on the map</p>
      <img src={img_slice1} alt="" className='img_slice2' />
    </div>
  )
}

export default Slice2;
