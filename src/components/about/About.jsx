import React from 'react'
import './about.css'
import ABOUT from '../../assets/about.jpg'
import { AiFillBook } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ABOUT} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2 Years Working</small>
                        </article>
                        <article className="about__card">
                            <AiFillBook className='about__icon' />
                            <h5>Education</h5>
                            <small>Pursuing MS in Computer Science</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineCode className='about__icon' />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Hello, my name is Vishrut, and I am a Software Engineer with extensive expertise in Java, Python, and Node.js. I am passionate about AI and Machine Learning, and my primary focus is on Java and Python web development. Additionally, I have experience in RUST and JavaScript.<br /><br />
                        I invite you to explore my portfolio, where you can find a list of my projects. I am currently pursuing my Master's in Computer Science at Portland State University, further expanding my knowledge and skills in the field.<br /><br />
                        Thank you for visiting my profile, and I look forward to connecting with you.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default About