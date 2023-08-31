import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ImageShow(props) {

  const [IsLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);
  const [error, setError] = useState();
  const nav = useNavigate();

  useEffect(() => { axios.get('https://localhost:7041/asp-net/Images/LoadImg/' + sessionStorage.getItem('showid')).then((response) => { setData(response.data); setIsLoading(false) }).catch((e) => { setError(e.data); setIsLoading(false) }) }, [])

  return (
    <div className=' px-5 pt-5 mb-0'>
      <button type='button' className='btn float-none fs-2 ps-4 pt-2 mt-3 rounded-5' onClick={() => { nav('/home'); sessionStorage.setItem('editid', null) }}><i class="fa-solid fa-circle-arrow-left"></i> Back</button>
      <span className='text-dark-emphasis' style={{position:'relative',top:'17px'}}>(scroll inside the image if it been liked croped)</span>
      <div className='w-100 row border shadow-lg m-3 rounded-5 overflow-hidden p-0' style={{ maxHeight: '80svh' }}>
        {IsLoading ? (
          <div className='main-div'>
            <div className="scene">
              <div className="cube-wrapper">
                <div className="cube">
                  <div className="cube-faces">
                    <div className="cube-face shadow"></div>
                    <div className="cube-face bottom"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face back"></div>
                    <div className="cube-face front"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : Data !== null ? (
          <>
            <div className='col justify-content-center p-0'>
              <div className='overflow-hidden overflow-y-scroll text-center' style={{ maxHeight: '80svh' }}>
                <img src={`data:image/jpeg;base64,${Data.photos}`} alt={Data.filename} style={{ maxWidth: '1066px',objectFit: 'contain' }} />
              </div>
            </div>
            <div className='col-4 border-start position-relative'>
              <h2 className='pt-3'>{Data.filename}</h2>
              <button className='position-absolute bottom-0 end-0 m-4 btn btn-danger'><i class="fa-solid fa-download"></i> Download</button>
            </div>
          </>
        ) : (<div>no data : {error}</div>)}
      </div>
    </div>
  )
}


/* <div className='col justify-content-center p-0'>
          <div className='overflow-hidden overflow-y-scroll' style={{ maxHeight: '80svh' }}>
            <img src={img} className='' style={{ maxWidth: '933px', objectFit: 'contain' }} />
          </div>
        </div>
        <div className='col-5 border-start'>hi - {sessionStorage.getItem('showid')}</div> */