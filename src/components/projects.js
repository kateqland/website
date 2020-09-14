import React from 'react';
import '../styles/projects.css';
import '../styles/general.css';
import { HashLink as Link } from 'react-router-hash-link';
// pothole
import pothole from '../images/projects/pixil-frame-0.png';
// easygov
import easygov from '../images/projects/easygov.png';

function Projects() {
    return (
      <div className="projects">

        <div className="body">
            
            <p className="title">Projects</p>
            <div className="row" style={{top: '0', position: 'absolute'}}>
                <a className="redirect" href="#Projects_Photos"><button className="redirect-button">Project Photos</button></a>
            </div>

            <div className="project" style={{marginTop:'0px'}}>
                <div className="project_card">
                    <p className="project_name">Holed Up</p>
                    <img src={pothole} alt="Patch the pothole (logo)"></img>
                </div>
                <div className="project_description">
                    <p>
                        Holed Up is an IOS app that tracks all user's inputs about potholes into Google's Firebase. The user uses Apple Maps to pinpoint the pothole; 
                        if there is already a review, the user can rate and submit another recording of that same pothole. Using a formula based on the serverity of the pothole's rating
                        and amount of submissions, an email and call will be placed to the government to get the road fixed. 
                        This was built during WomxnHacks 2020 where I won best mobile app.
                    </p>
                </div>
            </div>

            <div className="project">
                <div className="project_card">
                    <p className="project_name"><a className="link" href= 'https://easygov.app' target="_blank" style={{color: 'black', textDecoration: 'underline'}}>EasyGov</a></p>
                    <img src={easygov} alt="EasyGov (logo)"></img>
                </div>
                <div className="project_description">
                    <p>
                    EasyGov is an online service for immigrants and non-native English speakers. 
                    We provide translated government forms that users can fill out and have their responses downloaded in the official English version of the form. 
                    I built the main pages of the website using React, GatsbyJS, and GraphQL. I also designed and built the form components in Storybook using React. 
                    Additionally, I implemented a backend function that automatically sends an email response to users. This was done using NodeJS and RESTful API. 
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Projects;