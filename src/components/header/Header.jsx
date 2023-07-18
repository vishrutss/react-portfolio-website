import React from 'react'
import './header.css'
import CTA from './CTA'
import PROFILE from '../../assets/profile.png'
import SOCIALS from './Socials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Vishrut Sharma</h1>
                <h5 className="text-dark">Java Developer</h5>
                <CTA />
                <SOCIALS />
                <div className="profile">
                    <img src={PROFILE} alt="profile" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header