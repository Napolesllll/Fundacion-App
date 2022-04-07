import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'

import log from '../img/log1.png'

function Navbar() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    <>
      <NavContainer>
         {/* <!-- logo --> */}
      <a href="/home" class="navbar-brand">
        <img src={log} alt=""/>
      </a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/home">Home</a>
          <a onClick={handleClick} href="/services">Services</a>
          <a onClick={handleClick} href="/contactos">Contact</a>
          <a onClick={handleClick} href="/blog">Blog</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

export const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

export const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`


// <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light navbar-main">
// <div class="container">
//     {/* <!-- logo --> */}
//   <a href="" class="navbar-brand">
//     <img src={log} alt=""/>
//   </a>
//     {/* <!-- Btn --> */}
//   <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Barra de navegacion">
//   <span class="navbar-toggle-icon"></span>
// </button>
// {/* <!-- items --> */}
// <div class="collapse navbar-collapse" id="mainNav">
// <div class="nav ms-auto text-dark">
//   <a href="home" class="nav-link active text-dark">Home</a>
//   <a href="Service" class="nav-link text-dark">Services</a>
//   <a href="#secPortfolio" class="nav-link text-dark">Portfolio</a>
//   <a href="contact" class="nav-link text-dark">Contact</a>
// </div>
// </div>
// </div>

// </nav>