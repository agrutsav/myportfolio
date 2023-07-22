import React from 'react'
import './about.css'
import aboutImage from '../../assets/about.jpg'
import { FaAward } from 'react-icons/fa'
import { AiFillBulb } from 'react-icons/ai'
import { VscFolderLibrary } from 'react-icons/vsc'
export default function About() {
    return (
        <section id='about'>
          <h5>Get To Know</h5>
          <h2>About Me</h2>
    
          <div className='container about__container'>
            <div className='about__me'>
              <img src={aboutImage} alt='About' width='100%' height='100%'
              />
            </div>
            <div className='about__content'>
              <div className='about__cards'>
                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5>Experience</h5>
                  <small>Student</small>
                </article>
    
                <article className='about__card'>
                  <AiFillBulb className='about__icon' />
                  <h5>DSA</h5>
                  <small>700+ Problems</small>
                </article>
    
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <h5>Projects</h5>
                  <small>5+ Completed</small>
                </article>
              </div>
              <p>I have been building websites since first year of college and made a lot of side projects. I have solved more than 400 DSA problems across various coding platforms like <a href='https://leetcode.com/agrutsav/' target='_blank' rel='noreferrer'>Leetcode</a> and <a href='https://auth.geeksforgeeks.org/user/agrutsav88728' target='_blank' rel='noreferrer'>GeeksForGeeks</a> .I also love doing open source development, I actively maintain various open source projects on <a href='https://github.com/agrutsav' target='_blank' rel='noreferrer'>Github</a>.</p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
    
          </div>
        </section>
      )
}
