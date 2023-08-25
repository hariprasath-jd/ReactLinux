import React, { Suspense, lazy } from 'react'
import HomeNavBar from '../Components/HomeComponent/HomeNavBar'
import HomeCarosel from '../Components/HomeComponent/HomeCarosel'
import HomeUpload from '../Components/HomeComponent/HomeUpload';
import { useLocation } from 'react-router-dom';
import HomeUploadSideBar from '../Components/HomeComponent/HomeUploadSideBar';

export default function HomeLayout() {

  const HomeMidContent = lazy(() => import('../Components/HomeComponent/HomeMidContent'));

  let val = useLocation().pathname;
  const loctracer = () => {
    if (val === '/home') {
      return (
        <div>
          <HomeCarosel />
          <Suspense fallback={<div>Loading...</div>}>

            <HomeMidContent />
          </Suspense>
        </div>
      )
    }
    else {
      return (<div className='row'>
        <div className='col-2'><HomeUploadSideBar /></div>
        <div className='col'><HomeUpload /></div>
        </div>)
    }
  }

  return (
    <div>
      <HomeNavBar />
      {loctracer()}
    </div>
  )
}
