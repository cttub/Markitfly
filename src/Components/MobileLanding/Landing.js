import React, { Component } from 'react';
import Fade from 'react-reveal';
import './mobile.css';
import piggy from '../../Assets/Images/Piggy.png';
import {Link} from 'react-router-dom';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='mobile-landing'>
                <img src={piggy}/>
                <div>
                 <h1 className='purple-txt'>Fuel Your Business Growth with Our Marketing Solutions</h1>
                 <p>We care about our clients and their businesses. Let us build up your business to your needs.</p>
                 <Link 
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/Consult"> <a className="orange-txt">
                                        Book your first consultation at no cost to you
                                        </a>
                 </Link>
                </div>
            </div>
        );
    }
}
 
export default Landing;