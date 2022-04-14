import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'

import log from '../img/log1.png';
import './SearchBar.css'

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
      <a  href="/home" class="navbar-brand" >
        <img  src={log} alt=""/>
      </a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/home">Home</a>
          <a onClick={handleClick} href="/service">Services</a>
          <a onClick={handleClick} href="/contact">Contact</a>
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

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.693);
  a {
    color: white;
    text-decoration: none;
    margin-right: 4rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 4rem;
      display: block;
      transition: 0.4s transform ;
      transform: scale(0.96);
    }
    a:hover {
      color: black;
      font-size: 2rem;
      
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 301;
    transition: .5s ease all;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
    a:hover {
      width: 1px;
      color: black;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
      z-index: 310;
    }
  }
;`

export const BgDiv = styled.div`
  background-color: gray;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 300;
  transition: all 0.6s ease;

  &.active {
    box-shadow: 0 0 20px rgba(14, 14, 19, 0.618);
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
`