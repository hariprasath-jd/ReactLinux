import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css';

export default function _BaseLayout() {
  return (
    <div style={{backgroundImage:URL('../Assert/')}}>
      <Outlet></Outlet>
    </div>
  )
}
