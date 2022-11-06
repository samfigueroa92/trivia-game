import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const About = () => {
    return (
        <div className="About">
            <h3>Hackers Team</h3>
            <section>
            <h3>Samantha</h3>
            <a href='https://www.linkedin.com/in/samantha-figueroa-fs/' target='_blank' rel='noreferrer'>
            <BsLinkedin/>
            </a>
            <a href='https://github.com/samfigueroa92' target='_blank' rel='noreferrer'>
            <BsGithub/>
            </a>
            </section>
            <section>
            <h3>Kalilah</h3>
            <a href='https://www.linkedin.com/in/kalilah-clarke-36876530' target='_blank' rel='noreferrer'>
            <BsLinkedin/>
            </a>
            <a href='https://github.com/KalilahClarke' target='_blank' rel='noreferrer'>
            <BsGithub/>
            </a>
            </section>
            <section>
            <h3>Derek</h3>
            <a href='https://www.linkedin.com/in/derekpeterson-plutus/' target='_blank' rel='noreferrer'>
            <BsLinkedin/>
            </a>
            <a href='https://github.com/derekpeterson-plutus' target='_blank' rel='noreferrer'>
            <BsGithub/>
            </a>
            </section>
        </div>
    );
};

export default About;