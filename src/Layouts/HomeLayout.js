import React from 'react'
import HomeNavBar from '../Components/HomeComponent/HomeNavBar'
import HomeCarosel from '../Components/HomeComponent/HomeCarosel'
import HomeMidContent from '../Components/HomeComponent/HomeMidContent'
import HomeUpload from '../Components/HomeComponent/HomeUpload';
import { useLocation } from 'react-router-dom';

export default function HomeLayout() {

  let val = useLocation().pathname;
  const loctracer = () => {
    if (val === '/home') {
      return (
        <div>
          <HomeCarosel />
          <HomeMidContent />
        </div>
      )
    }
    else {
      return <HomeUpload />
    }
  }

  return (
    <div>
      <HomeNavBar />
      {loctracer()}
    </div>
  )
}
