import React from 'react';
import imgLupa from  '../../../assets/imgs/svg/lupa.svg';
import imgRecent from  '../../../assets/imgs/svg/Recent.svg';
import img_SlideHome from '../../../assets/imgs/svg/Slide_home.svg';
import img_SlideSearch from '../../../assets/imgs/svg/Slide_search.svg';
import img_SlideTime from '../../../assets/imgs/svg/Slide_time.svg';
import img_SlideProfile from '../../../assets/imgs/svg/Slide_profile.svg';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    
    const navigate = useNavigate();

  return (
    <>
        <div className='input_search'>
            <img src={imgLupa} alt="" className='imgLupa' />
            <p>Search for a dish</p>
        </div>
        <p>Recent searches</p>
        <div>
            <div>
                <img src={imgRecent} alt="" className='imgRecent' />
                <p>Pizza</p>
            </div>
            <div>
                <img src={imgRecent} alt="" className='imgRecent' />
                <p>Burger</p>
            </div>
            <div>
                <img src={imgRecent} alt="" className='imgRecent' />
                <p>Pizza</p>
            </div>
            <div>
                <img src={img_SlideHome} alt="" className='img_SlideHome' onClick={() => navigate("/Home")}/>
                <img src={img_SlideSearch} alt="" className='img_SlideSearch' />
                <img src={img_SlideTime} alt="" className='img_SlideTime' onClick={() => navigate("/OrderHistory")}/>
                <img src={img_SlideProfile} alt="" className='img_SlideProfile' onClick={() => navigate("/Profile")}/>
            </div>
        </div>
    </>
  )
}

export default SearchPage;