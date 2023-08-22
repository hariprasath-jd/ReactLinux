import React from 'react'
import logo1 from '../../Images/img-1.jpg'
import logo2 from '../../Images/img-2.jpg'
import logo3 from '../../Images/img-3.jpg'
import '../../Styles/HomePage/HomeCarosel.css'

export default function HomeCarosel() {

    const boxs = 'inset 0px -30px 124px 38px #000';
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ boxShadow: {boxs} }}>
                        <img src={logo1} className="d-block  img-carosel img-fluid" alt="..." />
                        <div className="carousel-caption text-start text-light-emphasis">
                            <h1>Digital Canvas.</h1>
                            <p className="opacity-75">Your Window to a World of Art.</p>
                            <p><a className="btn btn-lg btn-primary" href="/nothing">Sign up today</a></p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ boxShadow: {boxs} }}>
                        <img src={logo2} className="d-block  img-carosel img-fluid" alt="..." />
                        <div className="carousel-caption text-light-emphasis">
                            <h1>Exploring Artistry.</h1>
                            <p>A Virtual Gallery Experience.</p>
                            <p><a className="btn btn-lg btn-primary" href="/noting">Learn more</a></p>
                        </div>

                    </div>
                    <div className="carousel-item" style={{ boxShadow: {boxs} }}>
                        <img src={logo3} className="d-block  img-carosel img-fluid" alt="..." />
                        <div className="carousel-caption text-end text-light-emphasis">
                            <h1>Gallery Gems.</h1>
                            <p>Unveiling Masterpieces Online.</p>
                            <p><a className="btn btn-lg btn-primary" href="/nothing">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-light-emphasis" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
    )
}
