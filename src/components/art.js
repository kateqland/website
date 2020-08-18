import React from 'react';
import '../styles/art.css';
import cockatiel from '../images/art/cockatiel.jpg'

function Art() {
    return (
      <div className="art" style={{backgroundColor: '#A2D6DB'}}>

        <div className="art_body">
            <p className="title">Art</p>
      
          <div className = "art_container">
            <img src={cockatiel} alt="cockatiel" className="art_image"></img>
            <p style={{marginTop: '8px'}}>Cockatiel</p>
          </div>
        </div>
      </div>
    );
}


export default Art;