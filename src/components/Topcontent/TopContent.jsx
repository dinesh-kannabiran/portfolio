import React from 'react'
import "./TopContent.css"
import { Link } from "react-scroll";

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h2>Hello, I am Dinesh</h2>
            <h3 className=''>I'm a  <span>Front-End Developer</span></h3>
            <a href="https://drive.google.com/file/d/1oLO2zMhG2BV6MeI6cwAaJmiCYcw21XjW/view?usp=drivesdk"  target="_blank" >
                <button className='cvButton'>Download CV</button>
            </a>
        </div>
    </div>
  )
}

export default TopContent
