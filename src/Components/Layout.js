import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                  <Outlet />
            </div>

        );
    }
}
 
export default Layout;