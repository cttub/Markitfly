import React, { Component } from 'react';

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id='homepage'>
               
                <h2  className='pink-txt'>First Consultation Free!</h2>
                <h1 className='purple-txt'>Heading One, Fuel Your Business Growth with Our Marketing Solutions</h1>
                <br></br>
                <h2 className='orange-txt'>First Consultation Free!</h2>
                <h1>Heading One, Fuel Your Business Growth with Our Marketing Solutions</h1>

                <br></br>
               
                <br></br>
                <h4>Enhance your Branding</h4>    
                <p>Paragraph, We care about our clients and their businesses. Let us build up your business to your needs.</p>            
                <button>Contact Us</button> <br></br>
                <button className='purple-btn'>Schedule a Consultation</button><br></br>
                <a>Book your first consultation at no cost to you</a>
                <p className='small-txt'>Book your first consultation at no cost to you</p>
            </div>

        );
    }
}
 
export default Homepage;