import React from 'react';
import imgLupa from  '../../assets/imgs/svg/lupa.svg';
import imgRecent from  '../../assets/imgs/svg/Recent.svg';


const SearchPage = () => {
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
        </div>
    </>
  )
}

export default SearchPage;