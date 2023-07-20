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
                            <p>Java</p>
                            <p>Python</p>
                            <p>C & C++</p>
                            <p>RUST</p>
                            <p>JavaScript</p>
                            <p>HTML & CSS</p>
                            <p>SQL</p>
                        </article>
                        <article className="skills__card">
                            <h3>Frameworks</h3>
                            <p>React JS</p>
                            <p>Node.js</p>
                            <p>Spring MVC</p>
                            <p>Cucumber testing</p>
                        </article>
                        <article className="skills__card">
                            <h3>Tools</h3>
                            <p>Docker</p>
                            <p>Git</p>
                            <p>JIRA</p>
                            <p>Visual Studio & VS Code</p>
                            <p>MySQL</p>
                            <p>PyCharm</p>
                        </article>
                        <article className="skills__card">
                            <h3>Cloud Platforms</h3>
                            <p>Google Cloud Platform</p>
                            <p>AWS Learner Lab</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills