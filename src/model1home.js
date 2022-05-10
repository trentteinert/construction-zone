import './model1home.css';
import { Suspense, useCallback } from "react";
import React from "react"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model001 from './components/Model001';
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
          <h7>‘Construction Zone’ is a web based archive of Construction sites throughout Manhattan. 3D Photo scanned, creating virtual copies placed into a three-dimensional space on the webpage, sorted visually based on geolocation.</h7>
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
      <Canvas clasName="canvas" camera={{ fov: 40, position: [4, 1, 3] }}>
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[3, 3, 1]} angle={0.3} />
        <Suspense fallback={null}>
          <Model001 position={[0, 1, 0]} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #666666;

  canvas {
    position: relative;
    z-index: 1;
    height: 375px;
    width: 300px;
    left: -400px;
    top: 120px;

  }
`;