import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import phone from '../../Assets/Images/Phone.png';
import Fade from 'react-reveal/Fade';
class Consult extends Component {
    state = {  } 
    render() { 
        return (
            <div id='consult-mobile'>
               
                 <div id='consulting'>
                    <Fade left duration={1500}><div className='phone-img col-lg-4'>
                            <img src={phone}/>
                    </div></Fade>
                    <div className='txt col-lg-6'>
                        <h2 className='orange-txt'>First Consultation Free!</h2>
                        <h1>Business Analysis and Consulting</h1>
                        <p>Schedule a personal meeting with us and we will analyze your business and how we can grow your numbers!</p>

                        <Fade up duration = {1500}><div className='consult-button'>
                            
                                <Link className='navigation-btn text-nav'
                                            onClick={() => {
                                                        document.querySelector("html").scrollTo(0,0);
                                                        }}
                                            to = "/Consult"> <button className='purple-btn'>
                                            Schedule a Consultation
                                            </button>
                                </Link>

                            <h6 className='white-txt'>Start your Markitfly Journey Today</h6>
                        </div></Fade>
                </div>

              </div>

            </div>

        );
    }
}
 
export default Consult;