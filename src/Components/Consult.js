import React, { Component } from 'react';
import Calendar from './Elements/Calendar';

import {Link} from 'react-router-dom';
class Consult extends Component {
    state = {  } 
    render() { 
        return (
            <div id='consult'>
                 <Link
                    className="contact-cta-mobile"
                    onClick={() => {
                        document.querySelector('html').scrollTo(0, 0);
                    }}
                    to='/Services'
                    >
                    <button>See our Services</button>
                    </Link>
                 <Calendar/>
             
                
            </div>
                   

        );
    }
}
 
export default Consult;