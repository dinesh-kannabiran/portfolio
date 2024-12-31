import React from 'react'
import { Element } from 'react-scroll'
import './AboutContainer.css'


function AboutContainer() {
  return (
    <Element id='about'>
    <div className='aboutSection'>
        <h1 className='title'>About <span>Me</span></h1>
        <h3 className='aboutMe'>I am a Front-end Developer with expertise in HTML, CSS, JavaScript, and React.js. I specialize in creating dynamic, responsive web applications with a strong emphasis on writing clean and efficient code. Passionate about coding and solving real-world problems, I am always eager to expand my knowledge in web development. I am seeking opportunities to collaborate with a team that values innovation and shares my enthusiasm for technology. I look forward to contributing my skills to impactful projects and continuing to grow as a developer in a challenging, forward-thinking environment.</h3>
    </div>
    </Element>
  )
}

export default AboutContainer
