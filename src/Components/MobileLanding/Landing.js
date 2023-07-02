import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './mobile.css';
import piggy from '../../Assets/Images/Piggy.png';
import { Link } from 'react-router-dom';
import cloud from '../../Assets/Images/cloud.png';

class Landing extends Component {
  state = {};

  render() {
    return (
      <div id="mobile-landing">
        <Link
          className="contact-cta-mobile"
          onClick={() => {
            document.querySelector('html').scrollTo(0, 0);
          }}
          to='/Services'
        >
          <button>See our Services</button>
        </Link>
        <Fade right>
          <div className="image">
            <img width={400} src={piggy} alt="Piggy" />
          </div>
        </Fade>
        <Fade left>
          <div className="image">
            <img className="cloud" width={300} src={cloud} alt="Cloud" />
          </div>
        </Fade>
        <div>
          <h1 className="purple-txt">
            Fuel Your Business Growth with Our Marketing Solutions
          </h1>
          <p>We care about our clients and their businesses. Let us build up your business to your needs.</p>
          <Link
            onClick={() => {
              document.querySelector('html').scrollTo(0, 0);
            }}
            to="/Consult"
          >
            
            <a className="pink-txt">
              <p
                className="orange-txt shadow morphism"
                style={{ textAlign: 'left', padding: '10px', borderRadius: '10px' }}
              >
                <img style={{position: "absolute", top: "-10px", right: "0px"}} src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png" alt="Astonished Face" width="30" height="30" />
                Book your first free consultation!
              </p>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
