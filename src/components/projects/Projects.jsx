import React from 'react'
import './projects.css'
import RUST_IMG from '../../assets/rust.png'
import CPP_IMG from '../../assets/C++.png'
import PYTHON_IMG from '../../assets/python.png'
import JS_IMG from '../../assets/js.png'
import MATLAB_IMG from '../../assets/matlab.png'

const data = [
    {
        id: 1,
        title: 'A Text Based Adventure Game written in RUST',
        img: RUST_IMG,
        github: 'https://github.com/vishrutss/Text-based-adventure-game-in-Rust'
    },
    {
        id: 2,
        title: 'An Amusement Park created using OpenGL',
        img: CPP_IMG,
        github: 'https://github.com/vishrutss/Amusement_Park'
    },
    {
        id: 3,
        title: 'Image Editor Program',
        img: CPP_IMG,
        github: 'https://github.com/vishrutss/Image_Editor'
    },
    {
        id: 4,
        title: 'Chess AI Project',
        img: PYTHON_IMG,
        github: 'https://github.com/vishrutss/ChessProject'
    },
    {
        id: 5,
        title: 'A group of JavaScript Projects',
        img: JS_IMG,
        github: 'https://github.com/vishrutss/Learning-JavaScript'
    },
    {
        id: 6,
        title: 'Vulgar tweet identification using Machine Learning',
        img: PYTHON_IMG,
        github: 'https://github.com/queoui/VulgarTweetIdentification'
    },
    {
        id: 7,
        title: 'Internet Relay Chat Project',
        img: PYTHON_IMG,
        github: 'https://github.com/master-of-none/IPProject'
    },
    {
        id: 8,
        title: 'Product Key Activation using Asymmetric Cryptography',
        img: PYTHON_IMG,
        github: 'https://github.com/vishrutss/Product_Key_Activation_Project'
    },
    {
        id: 9,
        title: 'Driver Drowsiness Detection program',
        img: MATLAB_IMG,
        github: 'https://github.com/vishrutss/Driver-Drowsiness-Detection'
    }
]

const Projects = () => {
    return (
        <section id="projects">
            <h5>My Work</h5>
            <h2>Some of my Projects</h2>
            <div className="container project__container">
                {
                    data.map(({ id, title, img, github }) => {
                        return (
                            <article key={id} className="project__item">
                                <div className="project__item-image">
                                    <img src={img} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <a href={github} className='btn'>Github</a>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects