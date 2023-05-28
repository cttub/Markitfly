import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/whiteLogo.png';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div id='footer' className={this.props.background}>
                <img className='logo hide-foot-img' src={logo}/>
                <div className='column hide-foot'>
                        <Link className='white-link'
                                                onClick={() => {
                                                            document.querySelector("html").scrollTo(0,0);
                                                            }}
                                                to = "/"> <p className='white-txt txt'>
                                                Markitfly Media
                                                </p>
                        </Link>
                    <a href="mailto:contact@markitfly.com" className='white-txt white-link txt'>contact@markitfly.com</a>
                </div>
                <div className='column'>
                        <Link className='white-link'
                                                onClick={() => {
                                                            document.querySelector("html").scrollTo(0,0);
                                                            }}
                                                to = "/TermsOfUse"> <p className='white-txt txt'>
                                                Terms of Use
                                                </p>
                        </Link>
                        <Link className='white-link'
                                                onClick={() => {
                                                            document.querySelector("html").scrollTo(0,0);
                                                            }}
                                                to = "/Privacy"> <p className='white-txt txt'>
                                                Privacy Policy
                                                </p>
                        </Link>
                </div>
                <div className='column hide-foot'>
                        <Link className='white-link'
                                                onClick={() => {
                                                            document.querySelector("html").scrollTo(0,0);
                                                            }}
                                                to = "/Services"> <p className='white-txt txt'>
                                                Services
                                                </p>
                        </Link>
                        <Link className='white-link'
                                                onClick={() => {
                                                            document.querySelector("html").scrollTo(0,0);
                                                            }}
                                                to = "/Consult"> <p className='white-txt txt'>
                                                Schedule a Consultation
                                                </p>
                        </Link>
                </div>
                

            </div>

        );
    }
}
 
export default Footer;