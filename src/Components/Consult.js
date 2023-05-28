import React, { Component } from 'react';
import Calendar from './Elements/Calendar';

import {Link} from 'react-router-dom';
class Consult extends Component {
    state = {  } 
    render() { 
        return (
            <div id='consult'>
                 <Calendar/>
             
                 <Link className='calendly-service'
                                        onClick={() => {
                                                    document.querySelector("html").scrollTo(0,0);
                                                    }}
                                        to = "/Services"> <button className='purple-btn'>See our Services</button>
                                </Link>
            </div>
                   

        );
    }
}
 
export default Consult;