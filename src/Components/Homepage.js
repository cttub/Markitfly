import React, { Component } from 'react';
import Landing from './Homepage/Landing';
import ReactFullpage from '@fullpage/react-fullpage';
import Tools from './Homepage/Tool';
import Consulting from './Homepage/Consulting';
import Case from './Homepage/Case';
import MobileHome from './MobileHome';

const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';

class Homepage extends Component {
  state = {};

  render() {
    const fullpageOptions = {
      scrollingSpeed: 1000,
      navigation: true,
      scrollOverflow: true, 
    };

    return (
      <ReactFullpage
        licenseKey={licenseKey}
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div className='mobileHide'><Landing/></div>
                <MobileHome/>
              </div>
              <div className='section mobileHide'>
                <Tools />
              </div>
              <div className='section mobileHide'>
                <Case />
              </div>
              <div className='section mobileHide'>
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
