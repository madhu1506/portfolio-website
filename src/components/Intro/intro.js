import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import {FaDownload} from 'react-icons/fa';
import FileSaver from 'file-saver';

const Intro = () => {
    const saveFile = () => {
        FileSaver.saveAs(
          process.env.PUBLIC_URL + "/resources/Resume-MadhuraR.pdf",
          "MadhuraR-Resume.pdf"
        );
    }
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Madhura</span> <br />Frontend Web Developer</span>
                <p className='introPara'>A passionate React web developer with experience in developing visually<br /> appealing and user friendly websites.</p>
                <Link><button className='btn' onClick={saveFile}><FaDownload className='btnImg'/><span className='text-space'>Resume</span></button></Link>
            </div>
            <img src={bg} alt="profile" className='bg' />
        </section>
    )
}

export default Intro