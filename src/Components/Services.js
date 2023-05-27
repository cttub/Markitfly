import React, { Component } from 'react';
import '../Style/service.css';
import ServiceCard from './Elements/ServiceCard';
import girl from '../Assets/Images/3D.png';
import Fade from 'react-reveal/Fade';
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

                
            </div>

        );
    }
}
 
export default Services;