import React, { Component } from 'react';
import CaseCover from '../Elements/CaseCover';
import magnify from '../../Assets/Icons/magnify.svg';
import money from '../../Assets/Icons/MoneyChart.svg';
import papers from '../../Assets/Icons/Papers.svg';
import heart from '../../Assets/Images/heart.png';
import speech from '../../Assets/Images/speech.png';
import cloud from '../../Assets/Images/cloud.png';
import client from '../../Assets/Images/client.png';
import approved from '../../Assets/Images/check.png';
import Fade from 'react-reveal/Fade';
class Case extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "case-study-section">
                <div style={{zIndex: "1"}}>
                    <div className='client-approved' style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                        <img width={"50px"} style = {{marginRight: "10px"}} src={client}/> <h2 className='orange-txt'>Client Project Approved!</h2>
                    </div>
                    <Fade up><h1>Our Projects and Case Studies</h1></Fade>
                    <div className='case-box'>
                   
                        <CaseCover
                        client = {approved}
                        type = "Project"
                        link = "https://www.transformlandmo.com/"
                        desc = "Visit Project Page"
                        bg = "pink-purple-horizontal"
                        heading = "Enhancing Business Branding by developing their online presence | Transformative Lawn and Landscape LLC"
                        icon = {magnify}/>
                        <CaseCover
                        desc = "Coming Soon"
                        bg = "green-blue-horizontal"
                        heading = "Increasing Business Revenue with new strategies and enhanced branding."
                        icon = {money}/>
                        <CaseCover
                        desc = "Coming Soon"
                        bg = "purple-horizontal"
                        heading = "Branding a Business’ online presence, increasing in traction towards their services"
                        icon = {papers}/>
                    </div>
                    <p>Want to learn more about a case study?</p>
                    <p><b>Contact <a className='pink-txt' href='mailto:contact@markitfly.com'>contact@markitfly.com</a></b></p>
                </div>
               
               <img className='heart-img ab-img' src={heart}/>
               <img className='speech-img ab-img' src={speech}/>
               <img className='cloudTop ab-img cloud' src={cloud}/>
               <img className='cloudBottom ab-img cloud' src={cloud}/>

            </div>
        );
    }
}
 
export default Case;