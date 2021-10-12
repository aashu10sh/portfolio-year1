import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact'

function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className='about-info'>
                    Hello There 👋, I am <br/> <span className='info-name'>Aashutosh Pudasaini</span>. <br/>I love playing around with technology.
                </div>
                <div className='about-photo'> 
                <img alt="Hackerman"  className='picture' src={require('../../../assets/coding.png').default}></img>
                </div>
            </div>
            <div className="about-bottom">
                <SocialContact />
            </div>
        </div>
    )
}

export default About
