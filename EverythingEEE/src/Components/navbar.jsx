/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faGripLines, faGripLinesVertical, faLocationDot, faPhone, faPieChart, faXmark } from '@fortawesome/free-solid-svg-icons'
import img2 from './images/Bitlogo.jpg'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return <div id="container" className=" text-white text-lg bg-white bg-[url('./images/Space.jpg')] bg-cover bg-center  w-full shadow-cyan-400" ><div id="navbar" className=" flex justify-between padding p-3 backdrop-blur  dark:bg-transparent shadow-md fixed w-full top-0 z-50 shadow-sky-600">
    <div id="logo" className='flex '>


      <div className='padding pl-4'><img className=" size-10 rounded-full " src={img2} /></div>

    </div>
    <div id="container" >
      <ul className='text-sky-600 md:flex space-x-16 hidden md:block text- font-semibold text-xl'>
        <li ><NavLink to="/" className={({ isActive }) => `hover:text-sky-400 hidden md:block ${isActive ? "text-sky-400 font-semibold" : " hover:text-slate-900"}`}>Home</NavLink></li>
        <li ><NavLink to="/resources" className={({ isActive }) => `hover:text-sky-400 hidden md:block ${isActive ? "text-sky-400 font-semibold" : " hover:text-slate-900"}`}>Resources</NavLink></li>
        <li ><NavLink to="/alumni" className={({ isActive }) => `hover:text-sky-400 hidden md:block ${isActive ? "text-sky-400 font-semibold" : " hover:text-slate-900"}`}>Alumni</NavLink></li>
        <li ><NavLink to="/contact" className={({ isActive }) => `hover:text-sky-400 hidden md:block ${isActive ? "text-sky-400 font-semibold" : " hover:text-slate-900"}`}>Contact Us</NavLink></li>
        <li ><NavLink to="/about" className={({ isActive }) => `hover:text-sky-400 hidden md:block ${isActive ? "text-slate-900 font-semibold" : " hover:text-slate-900"}`}>About Us</NavLink></li>
      </ul>
    </div>
    <div>
      <button className='md:hidden text-2xl
       hover:text-sky-600'onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
    </div>
    <div
      className={`fixed top-4 left-0  w-[70%] h-[100%] backdrop-blur bg-slate-900 dark:bg-transparent shadow-xl transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="absolute top-5 right-5 text-4xl "
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <nav className="p-8 bg-sky-600 min-h-screen shadow-2xl rounded-2xl">
        <ul className=" flex-row  w-[40%] items-center m-auto text-justify space-y-[10vh]">
          <li className='text-slate-900 text-[4vh] font-semibold'><NavLink to="/">MENU</NavLink></li>
          <li ><NavLink to="/" className={({ isActive }) => `text-[3vh] hover:text-sky-600  ${isActive ? "text-white" : " hover:text-sky-600"}`}>Home</NavLink></li>
          <li ><NavLink to="/resources" className={({ isActive }) => `text-[3vh] hover:text-sky-600  ${isActive ? "text-white" : " hover:text-sky-600"}`}>Resources</NavLink></li>
          <li ><NavLink to="/alumni" className={({ isActive }) => `text-[3vh] hover:text-sky-600  ${isActive ? "text-white" : " hover:text-sky-600"}`}>Alumni</NavLink></li>
          <li ><NavLink to="/contact" className={({ isActive }) => `text-[3vh] hover:text-sky-600  ${isActive ? "text-white" : " hover:text-sky-600"}`}>Contact Us</NavLink></li>
          <li ><NavLink to="/about" className={({ isActive }) => `text-[3vh] hover:text-sky-600 ${isActive ? "text-white" : " hover:text-sky-600"}`}>About </NavLink></li>

        </ul>
      </nav>
    </div>
    {/* bg-white bg-gradient-to-r from-slate-900 to-slate-800 ... */}
  </div>
  </div>
}
export default Navbar