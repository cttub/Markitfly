import React from 'react';
import './elements.css';

const CaseCover = (props) => {
  return (
    <div id="case-cover" className={props.bg}>
        <div className='heading'>
            <h2><b>{props.heading}</b></h2>
        </div>
        <div className='bottom'>
            <div className='icon'><img src={props.icon}/></div>
            <a className='white-txt'><b>Coming Soon</b></a>

        </div>
    </div>
  );
};

export default CaseCover;
