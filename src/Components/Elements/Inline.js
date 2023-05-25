import React from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const InlineComponent = () => {

useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload)
  });

  return (
    <div className="inline-widget">
      <InlineWidget url="https://calendly.com/markitflymedia/consultation"
       />
    </div>
  );
};

export default InlineComponent;
