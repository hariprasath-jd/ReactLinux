import React from 'react'
import '../../Styles/HomePage/HomeUploadSidebar.css'

export default function HomeUploadSideBar() {
    return (
        <div>
            <div className="flex-shrink-0 p-3 " style={{ width: '280px', height: '94svh', background: 'rgb(32 49 59)', marginTop: '50px' }} >
                
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        
                        <button className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Details
                        </button>
                        <div className="collapse show" id="home-collapse">
                            <ul className="btn-toggle t-icon t-icon-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Upload Files</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Uploaded Files</a></li>

                            </ul>
                        </div>
                    </li>
                    <hr></hr>
                    <li className="mb-1">
                        <button className="btn btn-toggle t-icon d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>
                        <div className="collapse" id="dashboard-collapse" >
                            <ul className="btn-toggle t-icon-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle t-icon d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div className="collapse" id="orders-collapse" >
                            <ul className="btn-toggle t-icon-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                                <li><a href="/nothing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    
                </ul>
                <button className='btn btn-toggle btn-dark'>hi</button>
            </div>
        </div>
    )
}
