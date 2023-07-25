import React from 'react'
import './footer.css'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#header" className='footer__logo'>Vishrut Sharma</a>
            <ul className="permalinks">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://github.com/vishrutss"><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/vishrut-sharma-8703b0113/"><AiFillLinkedin /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Vishrut S Sharma. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer