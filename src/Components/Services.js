import React, { Component } from 'react';
import '../Style/service.css';
import ServiceCard from './Elements/ServiceCard';
import girl from '../Assets/Images/3D.png';
import Fade from 'react-reveal/Fade';
import artTools from '../Assets/Icons/artTools.png';
import pencil from '../Assets/Icons/pencil.png';
import mega from '../Assets/Icons/megaphone.png';
import dev from '../Assets/Icons/dev.png';
import progression from '../Assets/Icons/progression.png';
import light from '../Assets/Icons/lightbulb.png';
import {Link} from 'react-router-dom';
import bubbleOne from '../Assets/Bubbles/1.png';
import bubbleTwo from '../Assets/Bubbles/2.png';
import bubbleThree from '../Assets/Bubbles/3.png';
import bubbleFour from '../Assets/Bubbles/4.png';

import Calender from './Elements/Calendar';

import Footer from './Elements/Footer';

class Services extends Component {
    state = {  } 
    render() { 
        return (
            <div id='service-page'>
                        <Link
                className="contact-cta-mobile"
                onClick={() => {
                    document.querySelector('html').scrollTo(0, 0);
                }}
                to='/Consult'
                >
                <button>Contact Us</button>
                </Link>
                <div className='heading'>
                    <div className='txt col-lg-6'>
                        <h1 className='white-txt txt-shadow'>We have variety of services that fits to your business needs</h1>
                    </div>
                    <Fade up delay = {300} duration={2000}><div className='img col-lg-4'>
                        <img src={girl}/>
                    </div></Fade>
                </div>

            <div className='full-service'>
                    <img className='bubbleOne bubble-img' src={bubbleOne}/>
                    <div className='service-section'>
                        <div className='cards'>
                         <section>
                            <div>
                                <h2 className='pink-txt'>Design Services</h2>
                                <h1>Enhance your Branding</h1>
                            </div>
                        </section>
                            <div className='card-container'>
                                <div>
                                   <ServiceCard className = "info-card"
                                    icon = {artTools}
                                    name = "Full Website Design"
                                    text = "Create a professional and effective online presence. We design custom websites that are tailored to your specific needs."
                                    bg = "pink-purple"
                                    />
                                    <ServiceCard className = "info-card"
                                    icon = {pencil}
                                    name = "Logo and Brand Design"
                                    text = "Create a strong visual identity for your business. Give your business a unique and memorable brand to stand out from your competition."
                                    bg = "blue-teal"
                                    />
                                </div>
                            </div>
                        </div>
                        <Fade right duration={1000}><div className='desc'>
                            <h2><b>Designing your ideal brand<img style={{marginLeft:"10px"}} src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Hearts.png" alt="Smiling Face with Hearts" width="35" height="35" /></b></h2>
                            <p>With our design services, we can help make your business stand out from the crowd. Our team uses great creativity and expertise to deliver unique designs tailored to your specific needs.</p>

                        </div></Fade>

                    </div>
            </div>


            <div className='full-service'>
                    <img className='bubbleTwo bubble-img' src={bubbleTwo}/>
                    <div className='service-section'>
                         
                    <Fade left duration={1000}><div className='desc'>
                            <h2><b>Click and Conversion Optimization<img style={{marginLeft:"10px"}}src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png" alt="Love Letter" width="35" height="35" /></b></h2>
                            <p>Our advanced Google advertising strategies and web development services can help you improve your online presence, increase traffic, and boost conversions.</p>

                        </div></Fade>
                        <div className='cards'>
                            <section>
                                <div>
                                    <h2 className='pink-txt'>Clientele Optimization Services</h2>
                                    <h1>Increase in Online Presence</h1>
                                </div>
                            </section>
                           
                            <div className='card-container'>
                                <div>
                                   <ServiceCard className = "info-card"
                                    icon = {mega}
                                    name = "Google Advertisement"
                                    text = "Google advertising can help you reach your target audience. We optimize your campaigns to increase conversions and maximize your return on investment."
                                    bg = "purple-blue"
                                    />
                                    <ServiceCard className = "info-card"
                                    icon = {dev}
                                    name = "Website Development"
                                    text = "Help bring your website to life. We develop custom websites that are optimize across all platforms for the best user experience."
                                    bg = "pink-red"
                                    />
                                    </div>
                            </div>
                        </div>

                    </div>
            </div>

            <div className='full-service'>
                    <img className='bubbleThree bubble-img' src={bubbleThree}/>
                    <div className='service-section'>
                        <div className='cards'>
                            <section>
                            <div>
                                <h2 className='pink-txt'>Performance Boost Services</h2>
                                <h1>Improve Business Strategies</h1>
                            </div>
                        </section>
                            <div className='card-container'>
                                <div>
                                   <ServiceCard className = "info-card"
                                    icon = {progression}
                                    name = "Progression Meetings"
                                    text = "Stay accountable and make progress towards your goals. We provide regular meetings to review your objectives, track your progress, and identify pain points."
                                    bg = "pink-purple"
                                    />
                                    <ServiceCard className = "info-card"
                                    icon = {light}
                                    name = "Problem-Solving Analysis"
                                    text = "Overcome challenges and roadblocks that may be hindering your growth. We help analyze problems and brainstorm solutions for you to overcome obstacles for your success."
                                    bg = "blue-teal"
                                    />
                                 </div>
                            </div>
                        </div>
                        <Fade right duration={1000}><div className='desc'>
                            <h2><b>Consultation and Analysis<img style={{marginLeft:"10px"}}src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Saluting%20Face.png" alt="Saluting Face" width="35" height="35" /></b></h2>
                            <p>Have one-on-one consultations with us and we will assess your business to identify growth opportunities and ways to improve your numbers.</p>

                        </div></Fade>

                    </div>
            </div>


                <div className='calender-block'>
                    <div className='calendar-component'><Calender/></div>
                    <img className='bubble-img bubbleFour' src={bubbleFour}/>
                </div>

                <div className='service-cta morphism'>
                    <h2 className='pink-txt'>Want to start building?</h2>
                    <h1 style={{marginBottom: "30px"}}>Schedule a Free Consultation</h1>
                <Link 
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/Consult"> <button>
                                        Book Now
                                        </button>
                </Link>
                </div>
                <Footer
                background = "footer-red"/>
             

            </div>

        );
    }
}
 
export default Services;