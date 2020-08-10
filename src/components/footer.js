import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function footer() {
  return (
    <div className="footer">
        <div className="footerbody">
          <div className="socialbar-container">
            <div className="socialbar">
              <a href="https://www.instagram.com/k8theocean/" class="footerLink"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="https://www.linkedin.com/in/kate-land/" class="footerLink"><FontAwesomeIcon icon={faLinkedin}/></a>
              <a href="https://github.com/kateqland/" class="footerLink"><FontAwesomeIcon icon={faGithub}/></a>
                 
            </div>
          </div>
          
          <div>
            <p style={{marginBottom:'0px'}}>&copy; Kate Land 2020.</p>
          </div>
          <div className="cat_box">
            <div className="catanim"></div>
          </div>
        </div>
        
    </div>
  );
}

export default footer;
