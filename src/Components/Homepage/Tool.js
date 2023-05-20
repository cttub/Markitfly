import React, { Component } from 'react';
import hands from '../../Assets/Images/HandsPhone.png';
import enhance from '../../Assets/Icons/enhance.svg';
import increase from '../../Assets/Icons/increase.svg';
import improve from '../../Assets/Icons/improve.svg';
class Tools extends Component {
    state = {  } 
    render() { 
        return (
            <div id='tools'>

                 <div className='tools-container'>
                        <div className='tools-txt col-lg-6'>
                                <h1>We give you the tools to give you maximum potential</h1>

                                <div className='mini-card col-lg-8'>
                                    <div className='logo'>
                                        <img src={enhance}/>
                                    </div>
                                    <div className='txt'>
                                        <h2>Enhance your Branding</h2>
                                        <p className='small-txt'>Elevate your business with our standout design services, including graphic, logo, and web design.</p>

                                    </div>
                                </div>

                                <div className='mini-card col-lg-8'>
                                    <div className='logo'>
                                        <img src={increase}/>
                                    </div>
                                    <div className='txt'>
                                        <h2>Increase in Online Presence</h2>
                                        <p className='small-txt'>Thrive your presence with our expertise in Google Analytics, and Web Development.</p>

                                    </div>
                                </div>

                                <div className='mini-card col-lg-8'>
                                    <div className='logo'>
                                        <img src={improve}/>
                                    </div>
                                    <div className='txt'>
                                        <h2>Improve Business Strategies</h2>
                                        <p className='small-txt'>Discuss the pain points in your company so we can help problem-solve your way to success.</p>

                                    </div>
                                   
                                </div>

                                <a className='pink-txt full-services-link'>See our full services</a>
                        </div>
                        <div className='hands-img col-lg-5'>
                                <img src = {hands}/>
                        </div>

                 </div>

            </div>
            
        );
    }
}
 
export default Tools;