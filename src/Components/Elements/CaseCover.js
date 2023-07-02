import React from 'react';
import './elements.css';

const CaseCover = (props) => {
  return (
    
    <div id="case-cover" className={props.bg}>

      <img className='client-stamp' src={props.client}/>
      <a href={props.link} target='_blank'>
        <div className='heading'>
            <h2><b>{props.heading}</b></h2>
        </div>
        <div className='bottom'>
            <div className='icon'><img src={props.icon}/></div>
            <p className='white-txt'><b>{props.desc}</b></p>

        </div>
      </a>
    </div>
  );
};

export default CaseCover;
