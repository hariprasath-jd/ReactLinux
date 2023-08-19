import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import _BaseLayout from '../Layouts/_BaseLayout';
import LoginPage from '../Pages/Login/LoginPage'
import Index from '../Pages/Home/Index'

export default function Routing() {
    
    return (
        <div style={{ height: '100svh' }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/register' element={<LoginPage />} />
                    <Route path='/home' element={<Index />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
