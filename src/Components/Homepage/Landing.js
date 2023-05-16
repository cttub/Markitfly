import React, { Component } from 'react';
import './home.css';

import Fade from 'react-reveal';
import piggy from '../../Assets/Images/Piggy.png';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='fuel'>
                <div className='landing-container'>
                        <div className='landing-txt col-lg-6'>
                            <h1 className='purple-txt'>Fuel Your Business Growth with Our Marketing Solutions</h1>
                            <p>We care about our clients and their businesses. Let us build up your business to your needs.</p>
                            <a className="link-with-arrow orange-txt" href="#">
                            Book your first consultation at no cost to you
                            <div className="arrow">
                                <svg className="arrow-svg orange-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                                <path d="m826.71 600c0-3.4961-2.1172-8.1406-4.2617-10.395l-120.91-128.47c-5.6445-5.8359-14.789-6.5117-21.371-0.58984-5.8828 5.2969-6.0312 15.621-0.58984 21.375l97.059 102.97h-388.24c-8.3477 0-15.113 6.7656-15.113 15.113s6.7656 15.113 15.113 15.113h388.24l-97.059 102.97c-5.4414 5.75-5.0547 15.824 0.58984 21.371 5.957 5.8594 15.812 5.3359 21.371-0.58984l120.91-128.47c3.5508-3.4844 4.2031-6.8398 4.2617-10.391z"/>
                                </svg>
                            </div>
                            </a>
                        </div>
                        <Fade right><div className='piggy-img col-lg-5 col-md-2'>
                            <img src = {piggy}/>
                        </div></Fade>


                </div>
            </div>

        );
    }
}
 
export default Landing;