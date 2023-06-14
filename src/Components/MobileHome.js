import React, { Component } from 'react';
import Landing from './MobileLanding/Landing';
import Tools from './MobileLanding/Tools';
import Footer from './Elements/Footer';
import Case from './MobileLanding/Case';
import Consult from './MobileLanding/Consult';
class MobileHome extends Component {
    state = {  } 
    render() { 
        return (
            <div id='mobile-home'>
                <Landing/>
                <Tools/>
                <Case/>
                <Consult/>
                <Footer
                background ="footer-purple"/>
             
            </div>

        );
    }
}
 
export default MobileHome;