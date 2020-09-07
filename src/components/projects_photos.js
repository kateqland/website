import React from 'react';
import '../styles/projects.css';
import { HashLink as Link } from 'react-router-hash-link';
// pothole
import pothole_1 from '../images/projects/pothole(1).png';
import pothole_2 from '../images/projects/pothole(2).png';
import pothole_3 from '../images/projects/pothole(3).png';
import pothole_4 from '../images/projects/pothole(4).png';
import pothole_5 from '../images/projects/pothole(5).png';
import pothole_6 from '../images/projects/pothole(6).png';

function Projects_Photos() {
    return (
      <div className="projects">

        <div className="project_body">
            <p className="title">Project Photos</p>
            <div className="row" style={{top: '0', position: 'absolute'}}>
                <a className="redirect" href="#Projects"><button className="redirect-button">Projects</button></a>
            </div>

            <div className="project_column" style={{marginTop:'0px'}}>
                <div className="project_card" style={{border: 'none', borderBottom: '2px solid #A2D6DB'}}>
                    <p className="project_name">Holed Up</p>
                </div>
                <div className="project_images">
                    <img src={pothole_1} alt="home screen" className="p_image"></img>
                    <img src={pothole_2} alt="map screen" className="p_image"></img>
                    <img src={pothole_3} alt="report screen" className="p_image"></img>
                    <img src={pothole_4} alt="rating screen" className="p_image"></img>
                    <img src={pothole_5} alt="thank you screen" className="p_image"></img>
                    <img src={pothole_6} alt="already reported screen" className="p_image"></img>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Projects_Photos;