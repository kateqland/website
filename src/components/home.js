import React from 'react';
import '../styles/home.css';
import cat from '../images/kitty_blep.jpg';
import projects from '../images/hello_world.png';
import photography from '../images/photography.jpg';
import art from '../images/art.png';

function Home() {
  return (
    <div className="Home">
      <div className="flex">
        <div className="bioimage">
            <img src={cat} alt="cat" />
        </div>
        <div className="Introduction">
          <div className="inside">
            <h1> Hello, I'm Kate.</h1> 
          </div>
          <div className="inside1">
            <div classname="insidebio">
              <p>I'm a Computer Science major at UCLA. If you would like a resume, email me at kateqland@gmail.com.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex" id= "categories">
        <div className="header2">
            <h3>Interests and Hobbies</h3>
        </div>
        <div className="divisor"></div>
        <div className="category" id="art">
          <div className="photo">
            <img src={art}></img>
          </div>
          <div className="description">
            <h3>Art</h3>
            <p>
              I like to draw and am recently trying to get into digital art. These are some of the pieces that I have made.
            </p>
          </div>
        </div>
        <div className="divisor"></div>
        <div className="category" id="projects">
          <div className="description">
            <h3>Projects</h3>
            <p> 
              Not only do I code during my classes, but I also tinker around with code outside class. Here are some of my projects that I have created.
            </p>
          </div>
          <div className="photo">
            <img src={projects}/>
          </div>
        </div> 
        <div className="divisor"></div>
        <div className="category" id="photography">
          <div className="photo">
            <img src={photography}></img>
          </div>
          <div className="description">
          <h3>Photography</h3>
          <p>
            I love admiring the scenery around me. Here are some shots that I have taken with a phone camera while traveling around.
          </p>
        </div>
        </div> 
      </div>
    </div>
    
  );
}

export default Home;
