import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Nav';
class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                  <Nav/>
                  <Outlet />
            </div>

        );
    }
}
 
export default Layout;