import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function BaseNavBar() {

    let data1 = {value:'Register',variant:'success'}
    let data2 = {value:'Login',variant:'danger'}
    
    const [text,textc]= useState(data1)

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">

                <Navbar.Brand href="#home" className='ms-3'>React-DotNet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className='p-1'>
                        <Button variant={text.variant} onClick={() =>textc(data2)} className='mx-2 my-1'>{text.value}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
