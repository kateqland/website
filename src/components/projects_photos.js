import React from 'react';
import '../styles/projects.css';
import '../styles/general.css';
// pothole
import pothole_1 from '../images/projects/pothole(1).png';
import pothole_2 from '../images/projects/pothole(2).png';
import pothole_3 from '../images/projects/pothole(3).png';
import pothole_4 from '../images/projects/pothole(4).png';
import pothole_5 from '../images/projects/pothole(5).png';
import pothole_6 from '../images/projects/pothole(6).png';
// pothole
import nova_1 from '../images/projects/nova1.png';
import nova_2 from '../images/projects/nova2.png';
import nova_3 from '../images/projects/nova3.png';
import nova_4 from '../images/projects/nova4.png';
import nova_5 from '../images/projects/nova5.png';
import nova_6 from '../images/projects/nova6.png';
import nova_7 from '../images/projects/nova7.png';

export default class Projects_Photos extends React.Component {

    expandShrink(id_name, button_id_name) {
        var project_images = document.getElementById(id_name);
        var button = document.getElementById(button_id_name);

        if(button.textContent == "Expand")
        {
            button.textContent = "Shrink";
            project_images.style.height = "30%";
            project_images.style.opacity = '100%';
        }
        else {
            button.textContent = "Expand";
            project_images.style.height = "1px";
            project_images.style.opacity = '0%';
        }
    }

    render() {
    return (
      <div className="projects">
        <div className="body">
            <p className="title">Project Photos</p>
            <div className="row" style={{top: '0', position: 'absolute'}}>
                <a className="redirect" href="#Projects"><button className="redirect-button">Projects</button></a>
            </div>

            <div className="project_column" style={{marginTop:'0px'}}>
                <div className="project_photo_card">
                    <p className="project_name">Holed Up</p>
                    <div className="row" id="expand-row">
                        <div className='redirect'>
                            <button className="redirect-button" id="holed-up-expand" onClick={()=>{this.expandShrink("holed-up", "holed-up-expand")}} style={{marginBottom: '16px'}}>Expand</button>
                        </div>
                    </div>
                </div>
                <div className="project_images" id="holed-up">
                    <img src={pothole_1} alt="home screen" className="p_image"></img>
                    <img src={pothole_2} alt="map screen" className="p_image"></img>
                    <img src={pothole_3} alt="report screen" className="p_image"></img>
                    <img src={pothole_4} alt="rating screen" className="p_image"></img>
                    <img src={pothole_5} alt="thank you screen" className="p_image"></img>
                    <img src={pothole_6} alt="already reported screen" className="p_image"></img>
                </div>
            </div>

            <div className="project_column">
                <div className="project_photo_card">
                    <p className="project_name" style={{marginBottom: '8px'}}>Nova</p>
                    <a className="link" href= 'https://youtu.be/srxU6hzMhKo' target="_blank" 
                    style={{color: 'black', textDecoration: 'underline', marginBottom: '8px'}}>Demo</a>
                    <div className="row" id="expand-row">
                        <div className='redirect'>
                            <button className="redirect-button" id="nova-expand" onClick={()=>{this.expandShrink("nova", "nova-expand")}} style={{marginBottom: '40px'}}>Expand</button>
                        </div>
                    </div>
                </div>
                <div className="project_images" id="nova">
                    <div className="grid_2">
                        <div className="grid-item"><img src={nova_1} alt="home screen" className="p_image_horiz"></img></div>
                        <div className="grid-item"><img src={nova_2} alt="report screen" className="p_image_horiz"></img></div>
                        <div className="grid-item"><img src={nova_3} alt="email warning screen" className="p_image_horiz"></img></div>
                        <div className="grid-item"><img src={nova_4} alt="submission screen" className="p_image_horiz"></img></div>
                        <div className="grid-item"><img src={nova_5} alt="tracking screen" className="p_image_horiz"></img></div>
                        <div className="grid-item"><img src={nova_6} alt="report status screen" className="p_image_horiz"></img></div>
                        <div className="grid-item"><img src={nova_7} alt="report status screen 2" className="p_image_horiz"></img></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
}