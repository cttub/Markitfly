import React, { Component } from 'react';
import '../Style/service.css';
import ServiceCard from './Elements/ServiceCard';
import girl from '../Assets/Images/3D.png';
import Fade from 'react-reveal/Fade';
import artTools from '../Assets/Icons/artTools.svg';
import pencil from '../Assets/Icons/pencil.svg';

import bubbleOne from '../Assets/Bubbles/1.png';
import bubbleTwo from '../Assets/Bubbles/2.png';
import bubbleThree from '../Assets/Bubbles/3.png';
import bubbleFour from '../Assets/Bubbles/4.png';


class Services extends Component {
    state = {  } 
    render() { 
        return (
            <div id='service-page'>
                <div className='heading'>
                    <div className='txt col-lg-6'>
                        <h1>We have variety of services that fits to your business needs</h1>
                    </div>
                    <Fade right duration={1500}><div className='img col-lg-4'>
                        <img src={girl}/>
                    </div></Fade>
                </div>

            <div className='full-service'>
                    <img className='bubbleOne bubble-img' src={bubbleOne}/>
                    <div className='service-section'>
                        <div className='cards'>
                            <h2 className='pink-txt'>Design Services</h2>
                            <h1>Enhance your Branding</h1>
                            <div className='card-container'>
                                   <Fade duration = {1500}><ServiceCard className = "info-card"
                                    icon = {artTools}
                                    name = "Full Website Design"
                                    text = "Create a professional and effective online presence. We design custom websites that are tailored to your specific needs."
                                    bg = "pink-purple"
                                    /></Fade> 
                                    <Fade duration = {2000}><ServiceCard className = "info-card"
                                    icon = {pencil}
                                    name = "Logo and Brand Design"
                                    text = "Create a strong visual identity for your business. Give your business a unique and memorable brand to stand out from your competition."
                                    bg = "blue-teal"
                                    /></Fade>
                            </div>
                        </div>
                        <div className='desc'>
                            <h2>Designing your ideal brand</h2>
                            <p>With our design services, we can help make your business stand out from the crowd. Our team uses great creativity and expertise to deliver unique designs tailored to your specific needs.</p>

                        </div>

                    </div>
            </div>


            <div className='full-service'>
                    <img className='bubbleTwo bubble-img' src={bubbleTwo}/>
                    <div className='service-section'>
                         
                        <div className='desc'>
                            <h2>Designing your ideal brand</h2>
                            <p>With our design services, we can help make your business stand out from the crowd. Our team uses great creativity and expertise to deliver unique designs tailored to your specific needs.</p>

                        </div>
                        <div className='cards'>
                            <h2 className='pink-txt'>Design Services</h2>
                            <h1>Enhance your Branding</h1>
                            <div className='card-container'>
                                   <Fade duration = {1500}><ServiceCard className = "info-card"
                                    icon = {artTools}
                                    name = "Full Website Design"
                                    text = "Create a professional and effective online presence. We design custom websites that are tailored to your specific needs."
                                    bg = "pink-purple"
                                    /></Fade> 
                                    <Fade duration = {2000}><ServiceCard className = "info-card"
                                    icon = {pencil}
                                    name = "Logo and Brand Design"
                                    text = "Create a strong visual identity for your business. Give your business a unique and memorable brand to stand out from your competition."
                                    bg = "blue-teal"
                                    /></Fade>
                            </div>
                        </div>

                    </div>
            </div>


            </div>

        );
    }
}
 
export default Services;