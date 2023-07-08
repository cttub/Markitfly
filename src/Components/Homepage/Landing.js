import React, { Component } from 'react';
import './home.css';
import Fade from 'react-reveal/Fade';
import piggy from '../../Assets/Images/Piggy.png';
import {Link} from 'react-router-dom';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='fuel'>
                <div className='landing-container'>
                        <div className='landing-txt col-lg-5'>
                            <h1 className='purple-txt'>Fuel Your Business Growth with Our Marketing Solutions</h1>
                            <p>We care about our clients and their businesses. Let us build up your business to your needs.</p>
                            
                            <Link className='navigation-btn text-nav'
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/Consult"> <a className="orange-txt" href="#">
                                        Book your first consultation at no cost to you
                                        </a>
                            </Link>
                        </div>
                        <Fade right delay = {300}><div className='piggy-img col-lg-5'>
                            <img src = {piggy}/>
                        </div></Fade>


                </div>
            </div>

        );
    }
}
 
export default Landing;