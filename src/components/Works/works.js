import React from 'react'
import './works.css'

const Works = () => {
  return (
    <section id='works'>
      <span className='workTitle'>Experience</span>
      <span className='workDesc'>A passionate React JS Developer with 2+ years of experience in the software industry. Can develop and maintain high-performance user interfaces.</span>
      <div className='workBars'>
        <h3>TATA Consultancy Services Ltd. <span className='years'>(01/2021 - Present)</span></h3>
        <p>Role - Developer</p><br />
        <div className='paragraphs'>
          <p>Was a part of an Emerging Tech Advisory Team in BFSI Domain.</p>
          <p>Developed interactive user interfaces using React and maintained state management with Redux.</p>
          <p>Collaborated with the design team to implement responsive designs, ensuring optimal user experience across various devices.</p>
        </div><br />
        <div className='paragraphs'>
          <p>Mentioned below are a few Web development projects that I've worked on:</p>
          <ul>
            <li>Developed screens for a food delivery and e-commerce application in vanilla JS.</li>
            <li>Developed pension calculator screens in React for a large UK Bank.</li>
            <li>Have worked on a React Micro-frontend application for Cards and Subscription management.</li>
            <li>Have worked on designing and developing screens for a PoC on international payment for one of the UK Bank. </li>
          </ul>
        </div><br/>
        <div className='paragraphs'>
          <p>Apart from Frontend Web Development, I have also worked on multiple emerging technologies including iOS Swift Development, AR/VR and Metaverse(Blender-3D Modelling).</p>
        </div>
      </div>
    </section>
  )
}

export default Works