import React, { useState } from 'react'
import img from '../../Images/placeholder.png'

export default function UserProfile() {

  let [btn,setBtn] = useState('btn btn-secondary position-absolute end-0')

   const handleHoverEnter = () => {
    setBtn('btn btn-danger position-absolute end-0')
   }

   const handleHoverLeave = () => {
    setBtn('btn btn-secondary position-absolute end-0')
   }

  return (
    <>
      <div style={{ fontFamily: 'sans-serif',position:'relative' }} className='m-3 mx-4 d-flex'><h2 className='border-bottom pb-1'>Profile</h2><button className={btn} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>Edit Profile</button></div>
      <div className='row border rounded-3 m-3' style={{ maxHeight: '90svh'}}>
        <div className='col mt-3 mx-2'>
          <span className='row mt-2'><span className='col-2 ms-3 text-dark-emphasis'>Name :</span><span className='col text-dark-emphasis'>Hari Prasath</span></span>
          <span className='row mt-2'><span className='col-2 ms-3 text-dark-emphasis'>Email :</span><span className='col text-dark-emphasis'>{sessionStorage.getItem('username')}</span></span>
          <span className='row mt-2'><span className='col-2 ms-3 text-dark-emphasis'>Name :</span><span className='col text-dark-emphasis'>Hari Prasath</span></span>
          <span className='row mt-2'><span className='col-2 ms-3 text-dark-emphasis'>Name :</span><span className='col text-dark-emphasis'>Hari Prasath</span></span>
        </div>
        <div className='col p-4 grid'>
          <div className='rounded-circle mx-auto border overflow-hidden'style={{width:'200px',height:'200px'}}>
            <img src={img} alt='profile placeholder' style={{width:'200px',height:'200px',mixBlendMode:'overlay'}} ></img>
          </div>
        </div>
      </div>
    </>
  )
}
