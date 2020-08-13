import React from 'react';
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


function Photography() {
    return (
      <div className="photography">

        <div className="photobody">
          <p className="title">Photography</p>
          <div className="album_container">
            {/* beach */}
            <img className="picture" src={beach_walk} alt="beach"/>
            <img className="picture" src={sanDiego_beach} alt="beach sunset"/>
            <img className="picture" src={sleeping_seal} alt="Ja Holla seals"/>
            <img className="picture" src={sleeping_seal_sunset} alt="Ja Holla seals sunset"/>

            {/* water with dark vibe */}
            <img className="picture" src={crystal_blue} alt="Big Sur cove"/>
            <img className="picture" src={stormy_blue} alt="Big Sur"/>
            <img className="picture" src={blue_lake} alt="lake sunset"/>
            <img className="picture" src={lake_sunset} alt="lake sunset 2"/>
            
            {/* dark */}
            <img className="picture" src={campfire} alt="campfire"/>
            <img className="picture" src={woods} alt="trees in dusk"/>
            
            {/* structures with random duck */}
            <img className="picture" src={USC_trees} alt="trees in bloom (University of SC)"/>
            <img className="picture" src={Michigan_bench} alt="bench in Michigan"/>
            <img className="picture" src={duck} alt="duck"/>
            <img className="picture" src={china_bench} alt="benches in shelter"/>
            <img className="picture" src={rocky_bridge} alt="bridge side view (Big Sur)"/>
            <img className="picture" src={golden_gate} alt="Golden Gate Bridge front view"/>
            <img className="picture" src={golden_gate_side} alt="Golden Gate Bridge side view"/>

            {/*flower*/}
            <img className="picture" src={pink_flower} alt="pink flower"/> 
            <img className="picture" src={rose} alt="rose in focus"/>
            <img className="picture" src={rose_light} alt="rose in daybreak"/>
            <img className="picture" src={yellow_bloom} alt="yellow flowers"/>
          </div>
        </div>
        
      </div>
    );
}
export default Photography;