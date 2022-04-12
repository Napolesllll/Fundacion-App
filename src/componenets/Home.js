import React from 'react';
import './Home.css'

import SearchBar from './SearchBar';
import BurguerButton from '../componenets/BurgerButton';

import { Link } from 'react-router-dom';

// ----------LOGIN --------------
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login/LoginButton';
import LogautButton from './login/LogautButton';

// ----------IMG INICIO --------------
import camp from '../img/camp.jpg'

// ---------- LOGO --------------
import Logo from '../img/log1.png'

// ----------ICONS ---------------
import icon from '../img/icons/facebook.svg'
import icon2 from '../img/icons/instagram.svg'
import icon3 from '../img/icons/whatsapp.svg'

// ---------- SLIDE --------------
import img  from '../img/slide1.jpg'
import img2 from '../img/slide2.jpg'
import img3  from '../img/slide3.jpg'
import img4 from '../img/slide4.jpg'

// ------------ POTFOLIO -----------
import port1 from '../img/portfolio/rehabi.jpg'
import port2 from '../img/portfolio/rehabi2.jpg'
import port3 from '../img/portfolio/rehabi3.jpg'
import port4 from '../img/portfolio/rehabi4.jpg'
import port5 from '../img/portfolio/rehabi5.jpg'
import port6 from '../img/portfolio/rehabi6.jpg'


export default function Home(){
  
  const { isAuthenticated } = useAuth0();

  

  return(
    <div>
   <SearchBar />
      <br />
      <br />
    { isAuthenticated ? <LogautButton /> : <LoginButton  /> }
      <br />
      <br />

    <figure>
      <blockquote class="blockquote">
        <h2>Bienvenido seas a puerto seguro</h2>
      </blockquote>
      <figcaption class="blockquote-footer">
        Lo que sale del corazón <cite title="Source Title">Llega al corazón</cite>
     </figcaption>
    </figure>
    
      
        <br />
        <br />
        <hr />
        <main>
        <div class="container bg-light ">
            <div class="row align-items-center header-main">
                <div class="col-md-7">
                    <h1 class="display-2">Que hay de nuevo viejo!!!</h1>
                    <br/>
                    <p class="text-muted-fw-light text-capitalize">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente cumque dicta animi explicabo sequi. Ex amet et, dolor eligendi commodi consectetur quo voluptatibus, cum nemo porro veniam at blanditiis?</p> <br/>

                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci beatae impedit quia, deleniti quasi sequi iusto exercitationem nihil nulla, laboriosam dolore c</p>
                </div>
                <br/>
                <div class="col-12 col-md-5">
                    <div class="photo-frame position-relative shadow">
                    <img src={camp} alt="" class="w-100 h-100"/>
                </div>
            </div>
            </div>
            <hr/>
        </div>
    </main>
    <br />
    <br />
        {
          
          <div className='divCarrusel' style={!BurguerButton.clicked ? {display:'block'}:{display:'block'} } >
            
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
    <br /> 
    
    <hr />
    <figure>
      <blockquote class="blockquote">
        <h2>Echele mente mi papa</h2>
      </blockquote>
      </figure>  
    

    <main class="row justify-content-center pt-5 sec-portfolio-js"
    >
        {/* <!--  columna 1 --> */}
        <div class="col-10 col-md-4">
          <div class="row">
            {/* <!--  Imagen 1 --> */}
            <Link to ='/contact'>
            <a href=""
               class="col-12 mb-3 portfolio-item" >
              <img src={port6}
                   alt="Moderado 3D" 
                   class="w-100 img-btn-modal-js"/>
            
            </a>
            </Link>     
            {/* <!--  Imagen 2 --> */}
            <Link to='/ludopata'>
            <a href="/ludopata" 
               class="col-12 mb-3 portfolio-item" >
              <img 
              src={port2} 
              alt="Diseño grafico" 
              class="w-100 img-btn-modal-js"/>
            </a>
            
            </Link>
            {/* <!--  Imagen 3 --> */}
            <a href="" 
               class="col-12 mb-3 portfolio-item">
              <img src={port1} 
                   alt="Branding" 
                   class="w-100 img-btn-modal-js"/>
            </a>
          </div>
        </div>
        {/* <!--  columna 2  --> */}
        <div class="col-10 col-md-8">
          <div class="row">
            <h1 class="col-12 py3 text-end display-4 ">Portfolio</h1>
            {/* <!--  Imagen 1 --> */}
            <a href="" 
               class="col-12 mb-3 portfolio-item">
              <img src={port3} 
                   alt="Web desing" 
                   class="w-100 img-btn-modal-js"/>
            </a>
            {/* <!--  Imagen 2 --> */}
            <a href="" 
               class="col-12 col-md-6 mb-3 portfolio-item">
              <img src={port4} 
                   alt="illustration" 
                   class="w-100 img-btn-modal-js"/>
            </a>
            {/* <!--  Imagen 3 --> */}
            <a href="" 
               class="col-12 col-md-6 mb-3 portfolio-item" >
              <img src={port5} 
                   alt="Branding" 
                   class="w-100 img-btn-modal-js"/>
            </a>
          </div>
        </div>
        {/* <!--  General Modal  --> */}
        <div class="col-9 modal fade" 
             id="modal-portfolio">
          <div class="modal-dialog position-relative modal-dialog-centered">
            <img src="" alt="" class="w-100 img-modal-js"/>
          </div>
        </div>

      </main>
    
      <hr />
      <div class="row justify-content-center text-center">
        {/* <!-- logo --> */}
      <a href="/home" class="navbar-brand">
        <img src={Logo} alt=""/>
      </a>
      {/* <!-- Items --> */}
         <nav class="nav col-11 justify-content-center mb-4">
          <a href="/home" class="nav-link active text-dark">Home</a>
          <a href="/service" class="nav-link text-dark">Services</a>
          <a href="/contact" class="nav-link text-dark">Contact</a>
          <a href="/blog" class="nav-link text-dark">Blog</a>
         </nav>
         {/* <!-- redes sociales (Social networks) --> */}
         <div class=" icons-social-networks">
          {/* <!-- Facebook --> */}
          <a href="https://www.facebook.com/rehabilitandocorazonesfundacion" target="_blank" class="bg-facebook">
            <img src={icon} alt="facebook"/>
          </a>
          {/* <!-- Instagram --> */}
          <a href="https://www.instagram.com/fundrehabilitandocorazones/" target="_blank" class="bg-Instagram mx-3">
            <img src={icon2} alt="Instagram"/>
          </a>
          {/* <!-- WhatsApp --> */}
          <a href="https://api.whatsapp.com/send?phone=573243416005&app=facebook&entry_point=page_cta&fbclid=IwAR0FiOjcbfQfWuseaohCgL5yxWnNh4-DsGr5HLfBDTCIv_4oA9RIXp7QBY8" target="_blank" class="bg-whatsApp">
            <img src={icon3} alt="whatsApp"/>
          </a>
        </div>

      </div>

      <footer > Copyright2022 © Rehabilitan docorazones fundacion </footer>
  </div>
    )
}