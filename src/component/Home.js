import React from 'react';
import '../style/Home.css'
import logo from '../photo/logo.png'
import Recruiters from '../component/Recruiters'
import standard from '../photo/standard.png'
function HomePage(){
    return (
        <div className='homepage'>
            <h1>COLDGROUP = Support women to advance career path</h1>
            <p> A platform exclusively build for women and women's organization to fasten the hiring process, build stronger connection!</p>
            <img style={{width: 400, height: 400}} src={logo} alt="An example image" />

            <br/>
            <br/>
            <br/>
            <br/>

            
            <h1>WHAT IS COLDGROUP?</h1>
            <h4> ColdGroup is a university-level resource for college-aged women interested in tech </h4>
            <h4> to support one another and help each other persist and succeed in the field.</h4>
            <h4> Women and Women's organization can register to be a part of the community. </h4>
            <h4>   Members of ColdGroup can get access to database of recruiter's email.</h4>
            <img style={{width: 400, height: 400}} src={standard} alt="An example image" />


            <a href="/join">
                 <button className="get-started-button">Apply</button>
            </a>
        </div>
    )
}

export default HomePage


