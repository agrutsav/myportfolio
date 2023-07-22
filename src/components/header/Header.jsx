import React from 'react'
import './header.css'
import CV from '../../assets/myCV.pdf'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeadersSocials'
export default function Header() {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Utsav Agrawal</h1>
        <h4>Fullstack Developer</h4>
        <p style={{
          fontWeight: 300, marginTop:
            '1rem'
        }} className='text-light'>I am a self-taught passionate full stack developer from India, currently in my third year of <span color='#fff'>bachelors in Information Technology</span> at <a href='https://hbtu.ac.in/' target='_blank' rel='noreferrer'>Harcourt Butler Technical University</a></p>
        <center>
          <div className='me'>
            <img src={ME} alt='Me' />
          </div>
        </center>

        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

        <HeaderSocials />
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
