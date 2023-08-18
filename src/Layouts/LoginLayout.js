import React from 'react'
import BaseNavBar from '../Components/BaseComponents/BaseNavBar'
import BaseContentLogin from '../Components/BaseComponents/BaseContentLogin'
import BaseFooter from '../Components/BaseComponents/BaseFooter'

export default function LoginLayout() {
  return (
    <div>
      <BaseNavBar />
      <BaseContentLogin />
      <BaseFooter />
    </div>
  )
}
