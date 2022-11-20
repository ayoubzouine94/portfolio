import React,{useRef} from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import {FaFacebookMessenger,FaWhatsappSquare} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6wxug3u', 'template_bqm5kog', form.current, 'paxqSMXnGZFRCSwPu')
   e.target.reset();
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="comtact__options">
            <article className="contact__option">
               <AiOutlineMail className="contact__option-icon" />
               <h4>Email</h4>
               <h5>ayoubzouine94@gmail.com</h5>
               <a href="mailto:Ayoubzouine@gmail.com">Send a message</a>
            </article>

            <article className="contact__option">
               <FaFacebookMessenger className="contact__option-icon" />
               <h4>Messenger</h4>
               <h5>Zouine Ayoub</h5>
               <a href="https://web.facebook.com/zouine.ayoub.56">Send a message</a>
            </article>

            <article className="contact__option">
               <FaWhatsappSquare  className="contact__option-icon"/>
               <h4>Whatsap</h4>
               <h5>+212 602732748</h5>
               <a href="https://api.whatsapp.com/send?phone=00212602732748">Send a message</a>
            </article>


          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" id="" rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send message</button>

          </form>
        </div>

    </section>
  )
}

export default Contact