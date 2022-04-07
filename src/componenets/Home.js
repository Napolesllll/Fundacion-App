import React from 'react';
import SearchBar from './SearchBar';

import './Home.css'


import img  from '../img/slide1.jpg'
import img2 from '../img/slide2.jpg'
import img3  from '../img/slide3.jpg'
import img4 from '../img/slide4.jpg'
import NavContainer from '../componenets/SearchBar';

export default function Home({props}){
 

  return(
    <div>
   <SearchBar />
      <br />
      <br />
      <br />
      <br />
    <figure>
      <blockquote class="blockquote">
        <p>Bienvenido seas a puerto seguro</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        Lo que sale del corazón <cite title="Source Title">Llega al corazón</cite>
     </figcaption>
    </figure>

        <br />
        <br />
        {
          
        <div className='divCarrusel' style={ NavContainer?.props.clicked? {display:'block'}:{display:'none'} } >
            
        <div  id="carouselExampleInterval" class="col-md-10  carousel slide container-sm " data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
            <img src={img3} class="d-iline w-50" alt="img"/>
            </div>
            <div class="carousel-item" data-bs-interval="1000">
            <img src={img2} class="d-iline w-50" alt="img"/>
            </div>
            <div class="carousel-item">
            <img src={img} class="d-iline w-50" alt="img"/>
            </div>
            <div class="carousel-item">
            <img src={img4} class="d-iline w-50" alt="img"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div> 
   }
    <br /> <br />
  </div>
    )
}

{/* <div id="carouselExampleFade" class=" container active carousel slide carousel-fade" data-bs-ride="carousel">
<div class="carousel-inner">
    <div class="carousel-item active">
    <img src={img3} class="d-iline w-50" alt="img"/>
    </div>
    <div class="carousel-item">
    <img src={img2} class="d-inline w-50 " alt="img"/>
    </div>
    <div class="carousel-item">
    <img src={img} class="d-inline w-50" alt="img"/>
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-red" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div> */}