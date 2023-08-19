import React from 'react'
import BaseNavBar from '../Components/BaseComponents/BaseNavBar'
import BaseContentLogin from '../Components/BaseComponents/BaseContentLogin'
import BaseFooter from '../Components/BaseComponents/BaseFooter'
import { useLocation } from 'react-router-dom'
import BaseContentRegister from '../Components/BaseComponents/BaseContentRegister'

export default function LoginLayout() {
  //alert(useLocation().pathname)
  let val = useLocation().pathname;
  const loctracer = () => {
    if(val === '/'){
      return <BaseContentLogin />
    }
    else{
      return <BaseContentRegister />
    }
  }
  return (
    <div>
      <BaseNavBar />
        <div>{loctracer()}</div>
      <BaseFooter />
    </div>
  )   
}
