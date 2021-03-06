import React from 'react';
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'


const Header = () => {

   const [click, setClick] = useState(false);

   const redirect = () => {
      window.location.href = 'https://quizzerproject.netlify.app'
   }


   const handleClick = () => {
      setClick(!click);
   }
   return (
      <div className="header-container">
         <header className="nav_header">
            <h1 onClick={redirect}> quizzer </h1>
         </header>

         <div className={click ? "menu-container d-flex" : "menu-container d-none"}>
            <div className="close-container">
            <p onClick={handleClick}>x</p>
            </div>
            <ul className="menu_options">
               <Link onClick={handleClick} to="/"><li>Inicio</li></Link>
               <Link onClick={handleClick} to="/rankingDeporte"><li>Ranking</li></Link>
               <Link onClick={handleClick} to="/HowToPlay"><li>¿Cómo jugar?</li></Link>
            </ul>
         </div>

         <div className="menu-burger-container"> 
         <AiOutlineMenu size={30} className="menu_burger" onClick={handleClick} />
         </div>
      </div>
   )
}

export default Header