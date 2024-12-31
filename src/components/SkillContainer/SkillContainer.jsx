import React from 'react'
import { Element } from "react-scroll"
import './SkillContainer.css'
import Html_img from '../../assets/Skillsimage/Html-img.jpg'
import Js_img from '../../assets/Skillsimage/js-img.png'
import React_img from '../../assets/Skillsimage/react-js.jpg'
import Css_img from '../../assets/Skillsimage/css-img.png'
import Git_img from '../../assets/Skillsimage/git-img.png'
import Front_img from '../../assets/Skillsimage/front-end.jpeg'


const SkillContainer = () => {
  return (
    <Element className='skillContainer' id="skills" >
      <h1 className='skill'>Skill<span>set</span> </h1>

      <div>
          <img src={Front_img} alt='' className='front_img'/>  
        </div> 
        
        <div className='skillContainer_image'>

        <div className='html_img'>
          <img src={Html_img} alt="" />
        </div>

        <div className='css_img '>
          <img src={Css_img} alt="" />
        </div>

        <div className='javascript_img'>
          <img src={Js_img} alt="" />
        </div>

        <div className='react_img'>
          <img src={ React_img} alt="" />
        </div> 

        <div className='git_img'>
          <img src={ Git_img} alt="" />
        </div>
        </div>
    </Element>
  )
}

export default SkillContainer
