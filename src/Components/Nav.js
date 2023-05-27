import React, { Component } from 'react';
import logo from '../Assets/markitfly.png';
import {Link} from 'react-router-dom';
class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <div id='nav'>
                
                <Link 
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/"> <img src ={logo}/>
                </Link>
        
                <Link className='contact-cta'
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/Consult"> <button>
                                        Contact Us
                                        </button>
                </Link>
              

            </div>
        );
    }
}
 
export default Nav;