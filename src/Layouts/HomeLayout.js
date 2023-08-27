import React, { Suspense, lazy } from 'react'
import HomeNavBar from '../Components/HomeComponent/HomeNavBar'
import HomeCarosel from '../Components/HomeComponent/HomeCarosel'
import HomeUpload from '../Components/HomeComponent/HomeUpload';
import { useLocation } from 'react-router-dom';
import HomeUploadSideBar from '../Components/HomeComponent/HomeUploadSideBar';
import HomeUserSpecificContent from '../Components/HomeComponent/HomeUserSpecificContent';
import ImageEdit from '../Components/ImageComponents/ImageEdit';

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
    if (val === '/upload') {
      return (<div className='row'>
        <div className='col-2'><HomeUploadSideBar /></div>
        <div className='col'><HomeUpload /></div>
      </div>)
    }

    if (val === '/myupload') {
      return (
        <div className='row'>
          <div className='col-2'><HomeUploadSideBar /></div>
          <div className='col mt-5'><HomeUserSpecificContent /></div>
        </div>
      )
    }

    if (val === '/edit') {
      return (
        <div className='row'>
          <div className='col-2'><HomeUploadSideBar /></div>
          <div className='col mt-5 p-4'><ImageEdit /></div>
        </div>
      )
    }
  }

  const checkSession = () => {
    if (sessionStorage.getItem('username') !== null) {
      return (
        <div>
          <HomeNavBar />
          {loctracer()}
        </div>);
    }
    else {
      return <div>No Session</div>;
    }
  }

  return (
    <div>
      {checkSession()}
    </div>
  )
}
