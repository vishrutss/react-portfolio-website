import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h2>My Experience & Education</h2>
            <div className="container">
                <div className="experience__container">
                    <h3>My Experience</h3>
                    <div className="content">
                        <article className='details'>
                            <BsFillPatchCheckFill className='details-icon' />
                            <div>
                                <h3>Application Development Analyst</h3>
                                <h5>Accenture Solutions Ltd., Bengaluru, India | Oct 2020 - Jul 2022</h5>
                                <p>
                                    I worked as part of the Shop Disney Test Automoation team. My work included building and refactoring automated test cases using Node JS and the Cucumber framework. I was also in charge of maintaining Shop Disney Japan's Test Automation Repository. I also was a part of automated test regressions for ShopDisney US, ShopDisney Japan, ShopDisney EMEA, and ShopDisney OMS (Order management system).
                                </p>
                            </div>
                        </article>
                        <article className='details'>
                            <BsFillPatchCheckFill className='details-icon' />
                            <div>
                                <h3>Software Engineering Intern</h3>
                                <h5>Integra Micro Systems, Bengaluru, India | Jun 2019 - Jul 2019</h5>
                                <p>
                                    I Created an application which accesses Twitter using the REST API to be able to read the user’s timeline, search for tweets and send tweets. Learned the basics of implementing the functions in the REST API. Completed all aspects of the project including requirements specification, design, implementation, testing and documentation.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="education__container">
                    <h3>My Education</h3>
                    <div className="content">
                        <article className='details'>
                            <BsFillPatchCheckFill className='details-icon' />
                            <div>
                                <h3>Masters In Computer Science</h3>
                                <h5>Portland State University, Portland, OR, USA | 2022 - present</h5>
                                <h4>GPA 3.82</h4>
                                <p>
                                    I am currently pursuing my Masters Degree at Portland State University. Here are some of the courses I have completed: Programming in RUST, Intro to Database Systems, Machine Learning, Artificial Intelligence, Web & Cloud Systems.
                                </p>
                            </div>
                        </article>
                        <article className='details'>
                            <BsFillPatchCheckFill className='details-icon' />
                            <div>
                                <h3>Bachelors in Computer Science</h3>
                                <h5>NMAM Institute of Technology, Nitte, KA, India | 2016 - 2020</h5>
                                <h4>CGPA 8.53 out of 10</h4>
                                <p>
                                    I am currently pursuing my Masters Degree at Portland State University. Here are some of the courses I have completed: Programming in RUST, Intro to Database Systems, Machine Learning, Artificial Intelligence, Web & Cloud Systems.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience