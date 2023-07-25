import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

// Initializing EmailJS environment variables
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
            .then((result) => {
                alert('Message Sent, I will get back to you shortly');
            }, (error) => {
                alert('An error occurred, Please try again');
            });
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>vishrutss@gmail.com</h5>
                        <a href="mailto:vishrutss@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <AiFillLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Vishrut Sharma</h5>
                        <a href="https://www.linkedin.com/in/vishrut-sharma-8703b0113/" target='_blank' rel="noopener noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>971-427-8341</h5>
                        <a href="https://api.whatsapp.com/send?phone=+19714278341" target='_blank' rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact