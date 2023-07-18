import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Socials = () => {
    return (
        <div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/vishrut-sharma-8703b0113/" target='_blank'><BsLinkedin/></a>
                <a href="https://github.com/vishrutss" target='_blank'><FaGithub/></a>
            </div>
        </div>
    )
}

export default Socials