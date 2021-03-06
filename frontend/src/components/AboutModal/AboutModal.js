import React from "react";

import './AboutModal.css';

import angellist from './icons/angellist.png';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';

function AboutModal() {
    return (
        <div className='about-modal-container'>
            <a className='about-link' href='https://angel.co/u/damien-darko'rel="noreferrer" target="_blank">
                <img src={angellist} alt='angellist'/>
            </a>
            <a className='about-link' href='https://github.com/djangothesolarboy'rel="noreferrer" target="_blank">
                <img src={github} alt='github'/>
            </a>
            <a className='about-link' href='https://www.linkedin.com/in/damien-darko/'rel="noreferrer" target="_blank">
                <img src={linkedin} alt='linkedin'/>
            </a>
        </div>
    );
}

export default AboutModal;