import React from 'react'
import { projectData } from './data'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          projectData.map(item => {
            return (
              <div key={item.id} className='portfolio__item'>
                <div className='portfolio__item-image '>
                  <img src={item.image1} onMouseOver= {e=> e.currentTarget.src = item.image2} onMouseOut= {e=> e.currentTarget.src = item.image1} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <div className='portfolio__item-buttons'>
                  <a href={item.github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                  <a href={item.demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio