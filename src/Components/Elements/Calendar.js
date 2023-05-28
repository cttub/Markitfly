import React from 'react';
import { InlineWidget, PopupWidget } from 'react-calendly';
import './elements.css';

const Calendar = () => {
  return (
    <div className="consult-box">
          <div className="txt col-lg-5">
            <div>
              <h2 className="pink-txt">First Consultation Free!</h2>
              <h1>Schedule a Meeting Today!</h1>
              <p>Schedule a personal meeting with us and we will analyze your business and how we can grow your numbers!</p>

            </div>
          </div>
          <div className="calendar">
            
                <InlineWidget className = "calendly" url="https://calendly.com/markitflymedia/consultation" 
                        styles={{
                        height: '600px',
                        width: '500px',
                       
        
                        }}
                        pageSettings={{
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: '#ff793f',
                        textColor: 'black',
                        }}
                  
                    />
          
        
          </div>


    </div>
  );
};

export default Calendar;
