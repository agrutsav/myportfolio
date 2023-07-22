import React from 'react'
import './footer.css'
// import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Utsav Agrawal</a>
      <ul className='links'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
       
        <a href='https://www.instagram.com/agrutsav/?next=%2F' target='_blank' rel='noreferrer'>
          <FiInstagram />
          </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Utsav Agrawal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer