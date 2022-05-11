import './model1home.css';
import { Suspense, useCallback } from "react";
import React from "react"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model001 from './components/Model001';
import Model021 from './components/Model021';
import img from './images/map1.jpg'

export default function Model1home() {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/inside', {replace: true}), [navigate]);
  const handleOnClick2 = useCallback(() => navigate('/upload', {replace: true}), [navigate]);
 
  return (
    <Wrapper className="App">
      <div class='row'>
        <div class='column'>
          <h3>Construction Sites</h3>
          <h5>Synopsis:</h5>
          <h27>‘Construction Zone’ is a web based archive of Construction sites<br></br>throughout Manhattan. 3D Photo scanned, creating virtual copies placed<br></br> into a three-dimensional space on the webpage, sorted visually based<br></br> on geolocation.</h27>
          <div><button id='Button01' onClick={handleOnClick}>Enter</button>
          <h8>or</h8>
          <button id='Button02' onClick={handleOnClick2}>Upload</button></div>
        </div>
        <div class='column' stlye='background-color:#aaa;'>
          <h4><div className="map1">
          <img src={img} alt=''/>
          </div></h4>
        </div>
      </div>
      <div><Canvas className='canvas1' camera={{ fov: 40, position: [2, 1, .7] }}>
        <OrbitControls target={[0, 0.5, 0]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[3, 3, 1]} angle={0.3} />
        <Suspense fallback={null}>
          <Model001 position={[0, 0, 0]} />
        </Suspense>
      </Canvas></div>
      <h25>About me.</h25>
      <h26>Trenton Teinert is a photographer currently residing in the Lower <br></br>East Side of Manhattan, in which his current work falls somewhere<br></br>between portraiture and landscape, working almost as environmental <br></br>portraits of the street of NY. Relying on happenstance and will to<br></br>find ways of connecting with his unfamiliar location. Relying on<br></br>the people to draw him in by their movement and routine.<br></br> Distracting the mind and falling into sync with the environment.</h26>
      <div><a href="https://www.trentteinert.com"><button id='Button03'>Trentteinert.com</button></a></div>
      <Canvas className='canvastwo' camera={{ fov: 40, position: [-6, 0.3, -1] }}>
        <OrbitControls target={[-4, 0, -0.5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[3, 3, 1]} angle={0.3} />
        <Suspense fallback={null}>
          <Model021 position={[-4, 0, -0.5]} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #666666;

`;