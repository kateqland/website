import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/art.css';
import FontAwesome from 'react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function research() {
    return (
      <div className="research">
        <div className= "dotbar">
            <div className="circle" id="colorme"></div>
            <div className = "circle"></div>
            <div className = "circle"></div>
        </div>

      </div>
    );
}


export default research;