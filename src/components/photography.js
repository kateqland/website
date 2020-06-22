import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/photography.css';
import beach_walk from '../images/photography/beach_walk.jpg';
import blue_lake from '../images/photography/blue_lake.jpg';
import campfire from '../images/photography/campfire.jpg';
import china_bench from '../images/photography/china_bench.jpg';
import crystal_blue from '../images/photography/crystal_blue.jpg';
import duck from '../images/photography/duck.jpg';
import golden_gate from '../images/photography/golden_gate.jpg';
import golden_gate_side from '../images/photography/golden_gate_side.jpg';
import lake_sunset from '../images/photography/lake_sunset.jpg';
import Michigan_bench from '../images/photography/Michigan_bench.jpg';
import pink_flower from '../images/photography/pink_flower.jpg';
import rocky_bridge from '../images/photography/rocky_bridge.jpg';
import rose from '../images/photography/rose.jpg';
import rose_light from '../images/photography/rose_light.png';
import sanDiego_beach from '../images/photography/sanDiego_beach.jpg';
import sleeping_seal from '../images/photography/sleeping_seal.jpg';
import sleeping_seal_sunset from '../images/photography/sleeping_seal_sunset.jpg';
import stormy_blue from '../images/photography/stormy_blue.jpg';
import USC_trees from '../images/photography/USC_trees.jpg';
import woods from '../images/photography/woods.jpg';
import yellow_bloom from '../images/photography/yellow_bloom.jpg';


function photography() {
    return (
      <div className="photography">
        <div className= "dotbar">
          <div className="circle"></div>
          <div className = "circle"></div>
          <div className = "circle" id="colorme"></div>
       </div>

        <div className="photobody">
          <p className="title">Photography</p>
          <div className="album_container">
            {/* beach */}
            <img class="picture" src={beach_walk}/>
            <img class="picture" src={sanDiego_beach}/>
            <img class="picture" src={sleeping_seal}/>
            <img class="picture" src={sleeping_seal_sunset}/>

            {/* water with dark vibe */}
            <img class="picture" src={crystal_blue}/>
            <img class="picture" src={stormy_blue}/>
            <img class="picture" src={blue_lake}/>
            <img class="picture" src={lake_sunset}/>
            
            {/* dark */}
            <img class="picture" src={campfire}/>
            <img class="picture" src={woods}/>
            
            {/* structures with random duck */}
            <img class="picture" src={USC_trees}/>
            <img class="picture" src={Michigan_bench}/>
            <img class="picture" src={duck}/>
            <img class="picture" src={china_bench}/>
            <img class="picture" src={rocky_bridge}/>
            <img class="picture" src={golden_gate}/>
            <img class="picture" src={golden_gate_side}/>

            {/*flower*/}
            <img class="picture" src={pink_flower}/> 
            <img class="picture" src={rose}/>
            <img class="picture" src={rose_light}/>
            <img class="picture" src={yellow_bloom}/>
          </div>
        </div>
        
      </div>
    );
}
export default photography;