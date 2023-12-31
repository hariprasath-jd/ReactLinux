import React from 'react'
import '../../Styles/HomePage/HomeNavBar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function HomeNavBar() {

  const nav = useNavigate();
  const Logout = () => {
    sessionStorage.clear();
    nav('/')
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bk-blur">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/home">Studios®</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/home'} className='nav-link active' ><i class="fa-solid fa-house"></i>  Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/profile'} className='nav-link' ><i class="fa-solid fa-user"></i> Profile</Link>
              </li>
              <li className="nav-item">
                <Link to={'/myupload'} className='nav-link' ><i class="fa-solid fa-file-arrow-up"></i> My Upload's</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="flex-shrink-0 dropstart drop-end">
                <a href="#" className="d-block link-body-emphasis text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu  text-small shadow dropdown-menu-start" >
                  <li><a className="dropdown-item" href="#">{sessionStorage.getItem('username')}</a></li>
                  <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                  <li><a className="dropdown-item" href="#">Switch Account</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><p className='dropdown-item my-0' onClick={Logout}>Sign Out</p></li>
                </ul>
              </div>
            </form>

          </div>
        </div>
      </nav>
    </div>
  )
}
