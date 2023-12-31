import React from 'react'
import '../../Styles/LoginPage/BaseContentLogin.css'

export default function BaseFooter() {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top w-100 f-opcatity" style={{position:'absolute',bottom:'0'}}>
                <p className="ms-3 mb-0 text-body-secondary">© 2023 Company, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
            </footer>
        </div>
    )
}
