import React, { Component } from 'react';
import Landing from './Homepage/Landing';
import ReactFullpage from '@fullpage/react-fullpage';
import Tools from './Homepage/Tool';
import Consulting from './Homepage/Consulting';
import Case from './Homepage/Case';
const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';

class Homepage extends Component {
  state = {};

  render() {
    const fullpageOptions = {
      scrollingSpeed: 1000,
      navigation: true,
    };

    // Check if the current device is a mobile device
    const isMobileDevice = window.innerWidth <= 767;

    if (isMobileDevice) {
      // Render the sections without ReactFullpage on mobile devices
      return (
        <div>
          <div className='section'>
            <Landing />
          </div>
          <div className='section'>
            <Tools />
          </div>
          <div className='section'>
            <Case />
          </div>
          <div className='section'>
            <Consulting />
          </div>
        </div>
      );
    }

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
                <Case />
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
