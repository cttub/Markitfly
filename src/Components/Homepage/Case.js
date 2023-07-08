import React, { Component } from 'react';
import CaseCover from '../Elements/CaseCover';
import magnify from '../../Assets/Icons/magnify.svg';
import money from '../../Assets/Icons/MoneyChart.svg';
import papers from '../../Assets/Icons/Papers.svg';
import heart from '../../Assets/Images/heart.png';
import speech from '../../Assets/Images/speech.png';
import cloud from '../../Assets/Images/cloud.png';
import client from '../../Assets/Images/client.png';
import approved from '../../Assets/Images/check.png';
import bell from '../../Assets/Images/noti.png';
import Fade from 'react-reveal/Fade';

const testimonial = [
    {
      company:  <p>Transformative Lawn and Landscape <a href='https://www.transformlandmo.com/' target='_blank'>Visit Website</a></p>,
      review: "They are wonderful to work with! They provided us with multiple updates throughout the whole process and options to do different design elements/updates instantly. Would definitely recommend!",
    },
    {
      company: <p>Broadview Seafood | New Orleans <a href='https://www.broadviewseafood.net/' target='_blank'>Visit Website</a></p>,
      review: "They are very accommodating to what I wanted with my website. I wanted something very simple and they made changes until I was happy with the final product.",
    },
    {
      company: <p>HYZ Inc | Galena Kansas</p>,
      review: "Markitfly was able to deliver results within the first four weeks of working with us! They were able to increase my revenue by 20% through their online advertisement. Not very tech savy myself, and was skeptical to change, but I am glad I worked with Markitfly to grow my business.",
    }
];

class Case extends Component {
  state = {
    showReview: false,
    currentReviewIndex: 0
  };

  handleNotificationClick = () => {
    this.setState(prevState => ({
      showReview: true,
      currentReviewIndex: 0
    }));
  };

  handleReviewClick = (event) => {
    // Check if the clicked element is an <a> tag
    if (event.target.tagName === 'A') {
      return;
    }
  
    this.setState(prevState => {
      const { currentReviewIndex } = prevState;
      const nextReviewIndex = (currentReviewIndex + 1) % testimonial.length;
      
      return {
        currentReviewIndex: nextReviewIndex
      };
    });
  };
  

  render() {
    const { showReview, currentReviewIndex } = this.state;
    const currentReview = testimonial[currentReviewIndex];

    return (
      <div id="case-study-section">
        <div style={{ zIndex: "1" }}>
          <Fade up>
            <div className='client-approved' style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img width={"50px"} style={{ marginRight: "10px" }} src={client} alt="Client" /> <h2 className='orange-txt'>Client Approved!</h2>
            </div>
          </Fade>
          <h1>Our Projects and Case Studies</h1>
          <div className='case-box'>
            <CaseCover
              client={approved}
              type="Project"
              link="https://www.transformlandmo.com/"
              desc="Visit Project Page"
              bg="pink-purple-horizontal"
              heading="Enhancing Business Branding by developing their online presence | Transformative Lawn and Landscape LLC"
              icon={magnify}
            />
            <CaseCover
              desc="Coming Soon"
              bg="green-blue-horizontal"
              heading="Increasing Business Revenue with new strategies and enhanced branding."
              icon={money}
            />
            <CaseCover
              desc="Coming Soon"
              bg="purple-horizontal"
              heading="Branding a Business’ online presence, increasing in traction towards their services"
              icon={papers}
            />
          </div>


          <div className='notification testimonial col-lg-4'>
            {!showReview ? (
              <Fade up delay={400}>
                <div>
                  <div className='noti-bubble clickable' onClick={this.handleNotificationClick}>
                    <img width="50px" src={bell} alt="Notification Bell" />
                    <div className='msgs'>
                      <div className='intro'>
                        <p className='orange-txt'><b><u>Click to see Client Reviews</u></b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ) : (
                <div className='review'>
                    <div className='noti-bubble review' onClick={this.handleReviewClick}>
                        <img width="50px" src={bell} alt="Notification Bell" />
                        <div className='company'>{currentReview.company}</div>
                        <div className='review'>
                        <p>{currentReview.review}</p>
                        </div>
                    </div>
                </div>
              
            )}
          </div>
          
        </div>


        <img className='heart-img ab-img' src={heart} alt="Heart" />
        <img className='speech-img ab-img' src={speech} alt="Speech Bubble" />
        <img className='cloudTop ab-img cloud' src={cloud} alt="Cloud" />
        <img className='cloudBottom ab-img cloud' src={cloud} alt="Cloud" />
      </div>
    );
  }
}

export default Case;
