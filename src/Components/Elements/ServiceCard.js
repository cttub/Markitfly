import React from 'react';

class ServiceCard extends React.Component {
    state = {  
    } 
    render() { 
       
        return (
            
            <div id = "serviceCard">
                <div>
                    <div className='heading'>
                        <img src ={this.props.icon}/>
                        <p className='name'><b>{this.props.name}</b></p>
                    </div>
                    <p>{this.props.text}</p>    
             </div>   
            </div>
        );
    }
}

 
export default ServiceCard;