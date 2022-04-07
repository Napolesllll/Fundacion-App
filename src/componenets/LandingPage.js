import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

// ----- imagenes ---- \\
// import TipoLogo from '../img/LogoLandin.png';

export default function LandingPage(){
    return(
         <div className='div'>
             {/* <img className='logo'src={TipoLogo} alt="perfil" /> */}
            <Link to='/home'>
              
                <button className='button1'>INGRESAR</button>
              
            </Link>
        </div>
    )
}