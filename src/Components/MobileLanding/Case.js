import React, { Component } from 'react';
import CaseCover from '../Elements/CaseCover';
import magnify from '../../Assets/Icons/magnify.svg';
import money from '../../Assets/Icons/MoneyChart.svg';
import papers from '../../Assets/Icons/Papers.svg';
import heart from '../../Assets/Images/heart.png';
import speech from '../../Assets/Images/speech.png';
import cloud from '../../Assets/Images/cloud.png';
import client from '../../Assets/Images/client.png';
import Fade from 'react-reveal/Fade';
import approved from '../../Assets/Images/check.png';
class Case extends Component {
    state = {  } 
    render() { 
        return (
            <div id='case-mobile'>
                <div className='case-container-mobile'>
                    <div className='client-approved' style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <h2 className='orange-txt'>Client Project Approved!<span><img style={{marginLeft:"10px"}} width="26" src={approved}/></span></h2> 
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
                
            </div>
        );
    }
}
 
export default Case;