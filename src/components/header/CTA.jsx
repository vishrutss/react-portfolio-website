import React from 'react'
import resume from '../../assets/Resume.pdf'

const CTA = () => {
    return (
        <div>
            <div className="cta">
                <a href={resume} download className='btn'>Download Resume</a>
                <a href="#contact" className='btn btn-primary'>Contact Me</a>
            </div>
        </div>
    )
}

export default CTA