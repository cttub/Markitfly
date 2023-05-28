import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Nav';
import BackToTop from './Elements/BackToTop';
class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                  <Nav/>
                  <Outlet />
                  <BackToTop/>
            </div>

        );
    }
}
 
export default Layout;