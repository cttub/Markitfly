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
                            <a className="orange-txt" href="#">
                            Book your first consultation at no cost to you
                            </a>
                        </div>
                        <Fade right><div className='piggy-img col-lg-5'>
                            <img src = {piggy}/>
                        </div></Fade>


                </div>
            </div>

        );
    }
}
 
export default Landing;