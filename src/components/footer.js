import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
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
          
          <div className="row">
            <div style={{borderBottom: 'black solid 2px'}}>
              <div className="catanim"></div>
            </div>
            <p style={{marginLeft:'16px'}}>&copy; Kate Land 2020.</p>
          </div>
        </div>
        
    </div>
  );
}

export default Footer;
