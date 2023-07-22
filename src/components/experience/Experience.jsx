import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript, DiMysql, DiReact } from 'react-icons/di'
import { BsBootstrapFill } from 'react-icons/bs'
import { SiMui, SiRedux, SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'


export default function Experience() {
    return (
        <section id='experience'>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
    
          <div className='container experience__container'>
            <div className='experience__frontend'>
              <h3>Frontend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                  <AiFillHtml5  className='experience__details-icon'/>
                  <div>
                    <h4>HTML5</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <DiCss3  className='experience__details-icon'/>
                  <div>
                    <h4>CSS3</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <DiJavascript  className='experience__details-icon'/>
                  <div>
                    <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <DiReact className='experience__details-icon' />
                  <div>
                    <h4>ReactJs</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <SiRedux className='experience__details-icon' />
                  <div>
                    <h4>Redux</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <BsBootstrapFill className='experience__details-icon' />
                  <div>
                    <h4>Bootstrap</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <SiMui  className='experience__details-icon'/>
                  <div>
                    <h4>Material UI</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
                
              </div>
            </div>
    
    
            <div className='experience__backend'>
              <h3>Backend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                  <FaNodeJs  className='experience__details-icon'/>
                  <div>
                    <h4>NodeJs</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <DiJavascript  className='experience__details-icon'/>
                  <div>
                    <h4>Javascript (ES6+)</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <SiMongodb className='experience__details-icon' />
                  <div>
                  <h4>Mongodb</h4>
                  <small className='text-light'>Experienced</small>  
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <DiMysql  className='experience__details-icon'/>
                  <div>
                    <h4>Mysql</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
              </div>
            </div>
          </div>
        </section>
      )
}
