import React from 'react'
import './experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2>My Experience & Education</h2>
            <div className="container experience__container">
                <div className="experience">
                    <h3>My Experience</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <div>
                                <h4>Application Development Analyst</h4>
                                <h5>Accenture Solutions Ltd., Bengaluru, India <br />Oct 2020 - Jul 2022</h5>
                                <p>
                                    I have been a valuable member of the Shop Disney Test Automation team, where I actively contributed to building and refactoring automated test cases using Node.js and the Cucumber framework. Moreover, I assumed the responsibility of maintaining Shop Disney Japan's Test Automation Repository. Additionally, I played an integral role in conducting automated test regressions for ShopDisney US, ShopDisney Japan, and ShopDisney OMS (Order Management System).
                                </p>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>Software Engineering Intern</h4>
                                <h5>Integra Micro Systems, Bengaluru, India <br />Jun 2019 - Jul 2019</h5>
                                <p>
                                    During my Internship I developed an application that leverages the REST API of Twitter, enabling seamless access to functionalities like reading the user's timeline, searching for tweets, and sending tweets. Throughout this project, I acquired a strong foundation in implementing various functions within the REST API. I successfully completed all stages of the project, encompassing requirements specification, design, implementation, testing, and comprehensive documentation.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="education">
                    <h3>My Education</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <div>
                                <h4>Masters In Computer Science</h4>
                                <h5>Portland State University, Portland, OR, USA  <br />2022 - 2024</h5>
                                <h5>GPA 3.87</h5>
                                <p>
                                    Here are some of the courses I have completed:
                                    <ul className='experience__list'>
                                        <li>Programming in RUST</li>
                                        <li>Intro to Database Systems</li>
                                        <li>Machine Learning</li>
                                        <li>Artificial Intelligence</li>
                                        <li>Web & Cloud Systems</li>
                                    </ul>
                                </p>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <h4>Bachelors in Computer Science</h4>
                                <h5>NMAM Institute of Technology, Nitte, KA, India  <br />2016 - 2020</h5>
                                <h5>CGPA 8.53 out of 10</h5>
                                <p>
                                    Some of the courses I completed during my Bachelors:
                                    <ul className='experience__list'>
                                        <li>Operating Systems</li>
                                        <li>Data Structures</li>
                                        <li>Design and Analysis Of Algorithms</li>
                                        <li>Mobile App Development</li>
                                        <li>Compiler Design</li>
                                    </ul>
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