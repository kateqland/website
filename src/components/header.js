import React from 'react';
import '../styles/header.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
        <div className="headerbody">
            <div className= "name">
                <Link to= "/" className="iconLink">
                    <h3><FontAwesomeIcon icon={faHome}/></h3>
                </Link>
            </div>

            <div className="hdivisor">
            </div>

            <div className="tab-container">
                <div className="tab">
                    <Link to="/Art" className="link">
                        <h3><FontAwesomeIcon icon={faPaintBrush}/> Art</h3>
                    </Link>
                </div>
                <div className="hdivisor"></div>
                
                <div className="tab">
                    <Link to="/Projects" className="link">
                        <h3><FontAwesomeIcon icon={faLaptop}/> Projects</h3>
                    </Link>
                </div>
                <div className="hdivisor"></div>
    
                <div className="tab"> 
                    <Link to="/Photography" className="link">
                        <h3><FontAwesomeIcon icon={faCamera}/> Photography</h3>
                    </Link>
                </div>
                
            </div>
        </div>
        <div className="shadow"></div>
    </div>
  );
}

export default Header;
