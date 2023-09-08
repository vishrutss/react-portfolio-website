import React from 'react'
import './skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <div className="container skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Express</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skills__backend">
                    <h3>Backend Development</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>RUST</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>C & C++</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Mongo DB</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Spring MVC</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Docker</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>AWS Learner Lab</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon' />
                            <div>
                                <h4>Google Cloud Platform</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills