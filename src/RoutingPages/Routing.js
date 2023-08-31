import React from 'react'
import '../App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../Pages/Login/LoginPage'
import Index from '../Pages/Home/Index'

export default function Routing() {
    
    return (
        <div style={{ height: '100svh'}} className='bg-blur'>
            <BrowserRouter>
                <Routes>

                    {/* Base Routing */}
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/register' element={<LoginPage />} />
                    <Route path='/home' element={<Index />} />

                    <Route path='/upload' element={<Index />} />
                    <Route path='/myupload' element={<Index />} />
                    <Route path='/edit' element={<Index />} />
                    <Route path='/show' element={<Index />}/>
                    <Route path='/profile' element={<Index />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
