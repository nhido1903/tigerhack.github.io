import React from 'react';
import '../style/Home.css'
import logo from '../photo/logo.png'
import Recruiters from '../component/Recruiters'
import standard from '../photo/standard.png'
function HomePage(){
    return (
        <div className='homepage'>
            <h1>Support DEPAUW students to advance career path</h1>
            <p> A platform exclusively build for DePauw Student organization to fasten the hiring process, build stronger connection!</p>
            <img style={{width: 400, height: 400}} src={logo} alt="An example image" />

    
        </div>
    )
}

export default HomePage


