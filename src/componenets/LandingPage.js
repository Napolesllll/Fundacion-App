import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

// ----- imagenes ---- \\
import TipoLogo from '../img/log1.png';

export default function LandingPage(){
    return(
        <div className="App">
        <header className="App-header">
          <img src={ TipoLogo} className="App-logo" alt="logo" />
         <Link to='/home'>
             <button className='button1'>INGRESAR</button> 
         </Link>
        </header>
      </div>
    )
}