import React from 'react'
import '../../Styles/HomePage/HomeNavBar.css'
import { Link } from 'react-router-dom'

export default function HomeNavBar() {
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
                <Link to={'/home'} className='nav-link active' >Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/upload'} className='nav-link' >My Upload's</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <div class="flex-shrink-0 dropstart drop-end">
                <a href="#" class="d-block link-body-emphasis text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                </a>
                <ul class="dropdown-menu  text-small shadow dropdown-menu-start" >
                  <li><a class="dropdown-item" href="#">New project...</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </form>
            <button className='btn btn-danger ms-4' >Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
