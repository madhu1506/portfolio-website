import React from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {BsFiletypeCss} from 'react-icons/bs'
import {BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoNodejs} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='skillsTitle'>Skills</h2>
        {/* <span className='skillsDesc'>I am a skilled and passionate React JS Developer with 3+ years of experience in the software industry. Can develop and maintain high-performance user interfaces.</span> */}
        <div className='skillsImages'>
            <div className='skillsImg' ><AiFillHtml5 className='icons'/>HTML</div>
            <div className='skillsImg' ><BsFiletypeCss className='icons'/>CSS</div>
            <div className='skillsImg' ><BiLogoJavascript className='icons'/>JS</div>
            <div className='skillsImg' ><BiLogoReact className='icons'/>ReactJS</div>
            <div className='skillsImg' ><BiLogoRedux className='icons'/>Redux</div>
            <div className='skillsImg' ><BiLogoNodejs className='icons'/>NodeJS</div>
        </div>
    </section>
  )
}

export default Skills