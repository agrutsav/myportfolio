import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
// import { RiMessengerLine } from 'react-icons/ri'

// importing emailjs
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i2uz69j', 'template_zm87v3z', form.current, 'I2ujdkWxOjX6c4Mun')
    e.target.reset();
    alert("Message sent successfully!");
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <div className='contact__option'>
            <MdOutlineEmail className='contact__option-image' />
            <h4>Email</h4>
            <a href='mailto:utsav88731@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </div>
          {/* <div className='contact__option'>
            <RiMessengerLine className='contact__option-image' />
            <h4>Messenger</h4>
            <a href='https://m.me/.35' target='_blank' rel='noreferrer'>Send a message</a>
          </div> */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' placeholder='Your Full Name' required />
          <input type='email' name='user_email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact