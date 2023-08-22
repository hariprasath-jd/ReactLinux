import React, { useState } from 'react'
import '../../Styles/LoginPage/BaseContentLogin.css'
import { useNavigate } from 'react-router-dom';
import { FetchUserData } from '../../Services/ApiService';

export default function BaseContentLogin() {
    const [username, User] = useState('')
    const [passwd, Pass] = useState('')
    const [col, SetColor] = useState('')
    const [result, SetResult] = useState('');
    let [test] = useState(false)
    const nav = useNavigate();

    const Validate = async () => {
        await FetchUserData(username.trim(), passwd.trim()).then((value) => { test = value});
        //alert(test + '  in state')
        if (test) {
            //alert('berfore nav')
            nav('/home')
        }
        else {
            SetColor('text-danger-emphasis')
            SetResult('Username Not Matched')
        }
    }

    return (
        <div style={{ height: '160%' }}>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5 mt-5 bkg-opcatity rounded-5" >
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">This is an React with .NET Core App</h1>
                        <p className="col-lg-10 fs-4">In This application I have merged two amazing technology like React & .NET Core to provide a magnificent UI look using BootStrap & Material UI. DOTNET Core WebAPI with is a Restful service </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form action='/home' className="p-4 p-md-5 border rounded-5 f-opcatity">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={username} onChange={(data) => User(data.target.value)} id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={passwd} onChange={(p) => Pass(p.target.value)} id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <small className={col} >{result}</small>
                            <button className="w-100 btn btn-lg btn-primary" onClick={() => Validate()} type="button">Login</button>

                            {/* <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
