import React, { Component } from 'react';
import CaseCover from '../Elements/CaseCover';
import magnify from '../../Assets/Icons/magnify.svg';
import money from '../../Assets/Icons/MoneyChart.svg';
import papers from '../../Assets/Icons/Papers.svg';
import heart from '../../Assets/Images/heart.png';
import speech from '../../Assets/Images/speech.png';
import cloud from '../../Assets/Images/cloud.png';
class Case extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "case-study-section">
                <div style={{zIndex: "1"}}>
                    <h1>Our Case Studies</h1>
                    <div className='case-box'>
                        <CaseCover
                        bg = "pink-purple-horizontal"
                        heading = "Using Google Analytics to Improve 7 years of business clientele"
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
               
               <img className='heart-img ab-img' src={heart}/>
               <img className='speech-img ab-img' src={speech}/>
               <img className='cloudTop ab-img cloud' src={cloud}/>
               <img className='cloudBottom ab-img cloud' src={cloud}/>

            </div>
        );
    }
}
 
export default Case;