import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
export default function HeadersSocials() {
  return (
    <div className='header__socials'>
            <a href='https://www.linkedin.com/in/agrutsav887/' target='_blank' rel='noreferrer'>
                <BsLinkedin />
            </a>
            <a href='https://github.com/agrutsav' target='_blank' rel='noreferrer'>
                <BsGithub />
            </a>
            {/* <a href='https://instagram.com/saranshgangwar_?igshid=ZDdkNTZiNTM=' target='_blank' rel='noreferrer'>
                <BsInstagram />
            </a> */}
        </div>
  )
}
