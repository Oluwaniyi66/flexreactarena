import React from 'react';
import '../../App.css';

function Header() {
    return (
        <div class="container-fluid" id="section-1">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="/assets/bg/bg4.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" id="slider-text">
                <h1>Fla<span>mes Sto</span>Re</h1>
                <p>Home.Pages.<span style={{ color: 'forestgreen' }}>Grid</span></p>
                <a href="#section-2">EXPLORE</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="/assets/bg/bg5.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" id="slider-text">
                <h1>Let <span>Us</span> Shop!</h1>
                <p>Home.Pages.<span style={{ color: 'forestgreen' }}>Grid</span></p>
                <a href="#section-2">SHOP NOW</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="/assets/bg/web3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" id="slider-text">
                <h1>Our <span>Prestigious</span> Electronics!</h1>
                <p>Home.Pages.<span style={{ color: 'forestgreen' }}>Grid</span></p>
                <a href="#section-2">VIEW NOW</a>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    )
}

export default Header;
