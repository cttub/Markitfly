import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import hands from '../../Assets/Images/HandsPhone.png';
import enhance from '../../Assets/Icons/enhance.svg';
import increase from '../../Assets/Icons/increase.svg';
import improve from '../../Assets/Icons/improve.svg';
class Tools extends Component {
    state = {  } 
    render() { 
        return (
            <div id='tools-mobile'>
              
                 <div className='tools-container'>
                        <div className='tools-txt col-lg-5'>
                                <h1>We give you the tools to give you maximum potential</h1>

                                <Fade left duration= {1500}><div className='mini-card col-lg-8'>
                                    <div className='logo'>
                                        <img src={enhance}/>
                                    </div>
                                    <div className='txt'>
                                        <h2><b>Enhance your Branding</b></h2>
                                        <p className='small-txt'>Elevate your business with our standout design services, including graphic, logo, and web design.</p>

                                    </div>
                                </div></Fade>

                                <Fade left duration= {1800}> <div className='mini-card col-lg-8'>
                                    <div className='logo'>
                                        <img src={increase}/>
                                    </div>
                                    <div className='txt'>
                                        <h2><b>Increase in Online Presence</b></h2>
                                        <p className='small-txt'>Thrive your presence with our expertise in Google Analytics, and Web Development.</p>

                                    </div>
                                </div></Fade>

                                <Fade left duration= {2000}><div className='mini-card col-lg-8'>
                                    <div className='logo'>
                                        <img src={improve}/>
                                    </div>
                                    <div className='txt'>
                                        <h2><b>Improve Business Strategies</b></h2>
                                        <p className='small-txt'>Discuss the pain points in your company so we can help problem-solve your way to success.</p>

                                    </div>
                                   
                                </div></Fade>

                                
                                <Link className='navigation-btn text-nav'
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/Services"> <a className='pink-txt full-services-link'>See our full services</a>
                                </Link>
                        </div>
                        <div className='hands-img col-lg-6'>
                                <img src = {hands}/>
                        </div>

                 </div>

            </div>
        );
    }
}
 
export default Tools;