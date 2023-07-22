import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
export default function Nav() {
    const [active, setActive]= useState('#home');
    return (
      <nav>
        <a href='#home' onClick={()=>{setActive('#home')}}  className={active === '#home' ? 'active': ''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>{setActive('#about')}} className={active === '#about' ? 'active': ''}><AiOutlineUser/></a>
        <a href='#experience' onClick={()=>{setActive('#experience')}} className={active === '#experience' ? 'active': ''}><BiBook/></a>
        <a href='#portfolio' onClick={()=>{setActive('#portfolio')}} className={active === '#portfolio' ? 'active': ''}><AiOutlineProject/></a>
        {/* <a href='#testimonials' onClick={()=>{setActive('#testimonials')}} className={active === '#testimonials' ? 'active': ''}><BsPeople/></a> */}
        <a href='#contact' onClick={()=>{setActive('#contact')}} className={active === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
      </nav>
    )
}
