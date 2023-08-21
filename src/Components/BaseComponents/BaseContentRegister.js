import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BaseContentRegister() {

  const [username, User] = useState('')
  const [passwd, Pass] = useState('')
  const [col, SetColor] = useState('')
  const [result, SetResult] = useState('');
  const nav = useNavigate();

  const Validate = () => {
    if (username === 'hari@gmail.com') {
      if (passwd === '1234')
        nav('/home')
      else {
        SetColor('text-danger-emphasis')
        SetResult('Password Not Matched')
      }
    }
    else {
      SetColor('text-danger-emphasis')
      SetResult('Username Not Matched')
    }
  }

  return (
    <div style={{ height: '160%' }}>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 mt-5 bkg-opcatity rounded-5">
        <div className="row align-items-center g-lg-5 py-5">

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
              <div className="form-floating mb-3">
                <input type="password" className="form-control" value={passwd} onChange={(p) => Pass(p.target.value)} id="refloatingPassword" placeholder="Password" />
                <label for="refloatingPassword">ReType - Password</label>
              </div>
              <small className={col} >{result}</small>
              <hr className="my-2" />
              <button className="w-100 btn btn-lg btn-success" onClick={() => Validate()} type="button">Register</button>
              <hr className="my-2" />
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
          </div>
          <div className="col-lg-7 text-center text-lg-end">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Hola, To My React App</h1>
            <p className="col-lg-10 fs-4 float-end"> To Continue with the application please register with the beside mentioned information</p>
          </div>
        </div>
      </div>
    </div>
  )
}