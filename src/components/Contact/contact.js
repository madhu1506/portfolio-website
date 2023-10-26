import React,{useRef} from 'react'
import './contact.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h340faj', 'template_kmdzpep', form.current, 'PaQWGr_OWrZ66dOMf')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Thanks for taking the time to reach out. Please fill out the form below.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' required/>
                <input type='email' className='email' placeholder='Your Email' name='from_email' required />
                <textarea name="message" className='msg' rows="5" placeholder='Your Message' required></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/madhura-r-b359191a5' target="_blank"><AiFillLinkedin className='link'/></a>
                    <a href='https://github.com/madhu1506' target="_blank"><AiFillGithub className='link'/></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact