import React from 'react';
import '../styles/footer.css';
import { HashLink as Link } from 'react-router-hash-link';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import FontAwesome from 'react-fontawesome';

function footer() {
  return (
    <div className="footer">
        <div className="footerbody">
            <div className="socialbar">
              <a href="https://www.instagram.com/k8theocean/" class="footerLink"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="https://www.linkedin.com/in/kate-land/" class="footerLink"><FontAwesomeIcon icon={faLinkedin}/></a>
                 
            </div>
            <div className= "text">
              <p>&copy; Kate Land 2020.</p>
            </div>
            <div className="cat_box">
              <div className="catanim"></div>
            </div>
        </div>
        
    </div>
  );
}

export default footer;
