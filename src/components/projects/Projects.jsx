import React from 'react'
import './projects.css'
import RUST_IMG from '../../assets/rust.png'
import CPP_IMG from '../../assets/C++.png'
import PYTHON_IMG from '../../assets/python.png'
import JS_IMG from '../../assets/js.png'
import MATLAB_IMG from '../../assets/matlab.png'

const Projects = () => {
    return (
        <section id="projects">
            <h5>My Work</h5>
            <h2>Some of my Projects</h2>
            <div className="container project__container">
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={RUST_IMG} alt="" />
                    </div>
                    <h3>A Text Based Adventure Game written in RUST</h3>
                    <a href="https://github.com/vishrutss/Text-based-adventure-game-in-Rust" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={CPP_IMG} alt="" />
                    </div>
                    <h3>An Amusement Park created using OpenGL</h3>
                    <a href="https://github.com/vishrutss/Amusement_Park" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={CPP_IMG} alt="" />
                    </div>
                    <h3>Image Editor Program</h3>
                    <a href="https://github.com/vishrutss/Image_Editor" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={PYTHON_IMG} alt="" />
                    </div>
                    <h3>Chess AI Project</h3>
                    <a href="https://github.com/vishrutss/ChessProject" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={JS_IMG} alt="" />
                    </div>
                    <h3>A group of JavaScript Projects</h3>
                    <a href="https://github.com/vishrutss/Learning-JavaScript" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={PYTHON_IMG} alt="" />
                    </div>
                    <h3>Vulgar tweet identification using Machine Learning</h3>
                    <a href="https://github.com/queoui/VulgarTweetIdentification" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={PYTHON_IMG} alt="" />
                    </div>
                    <h3>Internet Relay Chat Project</h3>
                    <a href="https://github.com/master-of-none/IPProject" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={PYTHON_IMG} alt="" />
                    </div>
                    <h3>Product Key Activation using Asymmetric Cryptography</h3>
                    <a href="https://github.com/vishrutss/Product_Key_Activation_Project" className='btn'>Github</a>
                </article>
                <article className="project__item">
                    <div className="project__item-image">
                        <img src={MATLAB_IMG} alt="" />
                    </div>
                    <h3>Driver Drowsiness Detection program</h3>
                    <a href="https://github.com/vishrutss/Driver-Drowsiness-Detection" className='btn'>Github</a>
                </article>
            </div>
        </section>
    )
}

export default Projects