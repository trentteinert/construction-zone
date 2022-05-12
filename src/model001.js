import './model001.css';
import { Suspense, useCallback } from "react";
import React from "react"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model001 from './components/Model001';

export default function Model001page() {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/inside', {replace: true}), [navigate]);
  return (
    <Wrapper className="App">
      <Canvas clasName="canvas" camera={{ fov: 40, position: [2, 1, 0] }}>
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[3, 3, 1]} angle={0.3} />
        <Suspense fallback={null}>
          <Model001 position={[0, -.5, 0]} />
        </Suspense>
      </Canvas> 
        <div>
        <button id='Button4' onClick={handleOnClick}>
        back
      </button>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #666666;

  canvas {
    height: 850px;
    width: 100%;
  }
`;