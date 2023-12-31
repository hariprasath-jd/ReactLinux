import React, { useState } from 'react'
import '../../Styles/LoginPage/BaseContentLogin.css'
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function BaseNavBar() {

    //members
    let data1 = { value: 'Register', variant: 'success' }
    let data2 = { value: 'Login', variant: 'info' }
    const nav = useNavigate();
    const [text, textc] = useState(data1)
    

    //functions
    const Navigate = () => {
        if (text.value === 'Register') {
            textc(data2);
            nav('/register')

        }
        else{
            textc(data1);
            nav('/')
        }
    }


    //return the JSX
    return (
        <div>
            <Navbar expand="lg" className="f-opcatity">

                <Navbar.Brand href="/" className='ms-3 text-dark-emphasis'>Studios®</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className='p-1'>
                        <Button variant={text.variant} onClick={() => Navigate()} className='mx-2 my-1'>{text.value}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
