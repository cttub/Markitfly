import React, { Component } from 'react';
import CaseCover from '../Elements/CaseCover';
import magnify from '../../Assets/Icons/magnify.svg';
import money from '../../Assets/Icons/MoneyChart.svg';
import papers from '../../Assets/Icons/Papers.svg';
import heart from '../../Assets/Images/heart.png';
import speech from '../../Assets/Images/speech.png';
import cloud from '../../Assets/Images/cloud.png';
import Fade from 'react-reveal/Fade';
class Case extends Component {
    state = {  } 
    render() { 
        return (
            <div id='case-mobile'>
                <div className='case-container-mobile'>
                    <Fade up><h1>Our Case Studies</h1></Fade>
                    <div className='case-box'>
                        <CaseCover
                        bg = "pink-purple-horizontal"
                        heading = "Using Google Analytivs to grow and improve business clientele."
                        icon = {magnify}/>
                        <CaseCover
                        bg = "green-blue-horizontal"
                        heading = "Increasing Business Revenue with new strategies and enhanced branding."
                        icon = {money}/>
                        <CaseCover
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