import React, { Component } from 'react';
import CaseCover from '../Elements/CaseCover';
import magnify from '../../Assets/Icons/magnify.svg';
import money from '../../Assets/Icons/MoneyChart.svg';
import papers from '../../Assets/Icons/Papers.svg';
import heart from '../../Assets/Images/heart.png';
import speech from '../../Assets/Images/speech.png';
import cloud from '../../Assets/Images/cloud.png';
import client from '../../Assets/Images/client.png';
import Fade from 'react-reveal/Fade';
import bell from '../../Assets/Images/noti.png';
import approved from '../../Assets/Images/check.png';


const testimonial = [
  {
    company: <p>Rage Room | Springfield MO</p>,
    review: "We have seen a great improvement in bookings since Markitfly came along! They have great business strategies and really helped us grow.",
    
  },
  {
    company:  <p>Transformative Lawn & Landscape</p>,
    review: "They are wonderful to work with! They provided us with multiple updates throughout the whole process and options to do different design elements/updates instantly. Would definitely recommend!",
    link: <a href='https://www.transformlandmo.com/' target='_blank'>Visit Website</a>,
  },
  {
    company: <p>Broadview Seafood</p>,
    review: "They are very accommodating to what I wanted with my website. I wanted something very simple and they made changes until I was happy with the final product.",
    link: <a href='https://www.broadviewseafood.net/' target='_blank'>Visit Website</a>,
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
        if (event.target.tagName === 'a') {
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
            <div id='case-mobile'>
                <div className='case-container-mobile'>
                    <div className='client-approved' style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <Fade up><h2 className='orange-txt'>Client Approved!<span><img style={{marginLeft:"10px"}} width="26" src={approved}/></span></h2> </Fade>
                    </div>
                    <h1>Our Projects and Case Studies</h1>
                    <div className='case-box'>
                        <CaseCover
                        client = {approved}
                        type = "Project"
                        link = "https://www.transformlandmo.com/"
                        desc = "Visit Project Page"
                        bg = "pink-purple-horizontal"
                        heading = "Enhancing Business Branding by developing their online presence | Transformative Lawn and Landscape LLC"
                        icon = {magnify}/>
                        <CaseCover
                        desc = "Coming Soon"
                        bg = "green-blue-horizontal"
                        heading = "Increasing Business Revenue with new strategies and enhanced branding."
                        icon = {money}/>
                        <CaseCover
                        desc = "Coming Soon"
                        bg = "purple-horizontal"
                        heading = "Branding a Business’ online presence, increasing in traction towards their services"
                        icon = {papers}/>
                    </div>
                               
          <div className=''>
            {!showReview ? (
              <Fade up delay={400}>
                <div>
                  <div className='noti-bubble clickable' onClick={this.handleNotificationClick}>
                    <img width="50px" src={bell} alt="Notification Bell" />
                    <div className='msgs'>
                      <div className='intro'>
                        <p className='orange-txt'><b><u>Click to Open Reviews</u></b></p>
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
                        <div className='link'>{currentReview.link}</div>
                        </div>
                    </div>
                </div>
            )}
          </div>
         
                </div>
                
            </div>
        );
    }
}
 
export default Case;