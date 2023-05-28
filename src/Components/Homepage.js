import React, { Component } from 'react';
import Landing from './Homepage/Landing';
import ReactFullpage from '@fullpage/react-fullpage';
import Tools from './Homepage/Tool';
import Consulting from './Homepage/Consulting';
const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';

class Homepage extends Component {
    state = {};
  
  
    render() {
      const fullpageOptions = {
          scrollingSpeed: 1000,
          navigation: true,
         
        };
        
    
      return (
          
          <ReactFullpage
          licenseKey={licenseKey}
          {...fullpageOptions}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
            
                <div className='section'>
                  <Landing />
                </div>
                <div className='section'>
                  <Tools />
                </div>
                <div className='section'>
                  <Consulting />
                </div>
             
                
              </ReactFullpage.Wrapper>
            );
          }}
        />
      );
    }
  }
  
  export default Homepage;