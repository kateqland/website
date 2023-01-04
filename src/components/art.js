import React from 'react';
import '../styles/art.css';
import '../styles/general.css';
import cockatiel from '../images/art/cockatiel.jpg';
import pumpkinMeep from '../images/art/pumpkin_meep_transparent.png'

function Art() {
    return (
      <div className="art" style={{backgroundColor: '#A2D6DB'}}>

        <div className="body">
            <p className="title">Art</p>
      
          <div className = "art_container">
            <img src={cockatiel} alt="cockatiel" className="art_image"></img>
            <p style={{marginTop: '8px'}}>Cockatiel</p>
          </div>
          <div className = "art_container">
            <img src={pumpkinMeep} alt="Meep Pumpkin" className="art_image"></img>
            <p style={{marginTop: '8px'}}>Meep Pumpkin</p>
          </div>
        </div>
      </div>
    );
}


export default Art;