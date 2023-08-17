import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import _BaseLayout from '../Layouts/_BaseLayout';

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<_BaseLayout />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
