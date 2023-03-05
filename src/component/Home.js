import React from 'react';
import '../style/Home.css'
import logo from '../photo/logo.png'
import Recruiters from '../component/Recruiters'

function HomePage(){
    return (
        <div className='homepage'>
            <h1>Better Access Resources Industry Network</h1>
            <p>Networking Champion builds a stronger connection between you and recruiters. Better Job Seeking Proccess!</p>
            <img style={{width: 400, height: 400}} src={logo} alt="An example image" />
            <a href="/recruiter">
                 <button className="get-started-button">Get Started</button>
            </a>
        </div>
    )
}

export default HomePage


