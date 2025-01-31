import React from 'react';

import "./banner/banner.css"


function Banner({data}) {

  return (
    <div id="bootstrap-scope">
    <div className='cen'>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  {data.map((item, index) => (
    <div className='bnn'>
    <div class="carousel-item active "   >
      <img src={item.og} class="d-block w-100 " alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <h1>{item.title}</h1>
      </div>
    </div>
    </div>
   
    
       ))}
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
</div>
  );
}

export default Banner;
