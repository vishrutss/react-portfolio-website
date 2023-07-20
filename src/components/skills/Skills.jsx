import React from 'react'
import './skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <div className="container skills__container">
                <div className="skills__content">
                    <div className="skills__cards">
                        <article className="skills__card">
                            <h3>Programming Languages</h3>
                            <small>Java</small>
                            <small>Python</small>
                            <small>C & C++</small>
                            <small>RUST</small>
                            <small>JavaScript</small>
                            <small>HTML & CSS</small>
                            <small>SQL</small>
                        </article>
                        <article className="skills__card">
                            <h3>Frameworks</h3>
                            <small>React JS</small>
                            <small>Node.js</small>
                            <small>Spring MVC</small>
                            <small>Cucumber automated testing</small>
                        </article>
                        <article className="skills__card">
                            <h3>Tools</h3>
                            <small>Docker</small>
                            <small>Git</small>
                            <small>JIRA</small>
                            <small>Visual Studio & VS Code</small>
                            <small>MySQL</small>
                            <small>PyCharm</small>
                        </article>
                        <article className="skills__card">
                            <h3>Cloud Platforms</h3>
                            <small>Google Cloud Platform</small>
                            <small>AWS Learner Lab</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills