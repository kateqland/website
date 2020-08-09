import React from 'react';
import '../styles/projects.css';
import pothole from '../images/projects/pixil-frame-0.png';
import pothole_1 from '../images/projects/pothole(1).png';
import pothole_2 from '../images/projects/pothole(2).png';
import pothole_3 from '../images/projects/pothole(3).png';
import pothole_4 from '../images/projects/pothole(4).png';
import pothole_5 from '../images/projects/pothole(5).png';
import pothole_6 from '../images/projects/pothole(6).png';

function projects() {
    return (
      <div className="projects">

        <div className="project_container">
            <p className="title">Projects</p>
            <div className="project">
                <div className="p_noimage">
                    <div className="project_title">
                        <p className="project_name">Holed Up</p>
                        <img src={pothole} alt="Patch the pothole (logo)" width= "120px" ></img>
                    </div>
                    <div className="project_description">
                        <p>Developed an IOS app that tracked all user's input about potholes. User can use Apple Maps to pinpoint the pothole; 
                            if there is already a review, user can rate and submit another recording of that same pothole. Using a formula based on the serverity of the pothole
                            and amount of ratings, an email and call will be placed to get the roads fixed.
                        </p>
                    </div>
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


export default projects;