import './model005.css';
import { Suspense, useCallback } from "react";
import React from "react"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model005 from './components/Model005';

export default function Model005page() {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/inside', {replace: true}), [navigate]);
 
  return (
    <Wrapper className="App">
      <Canvas clasName="canvas" camera={{ fov: 40, position: [3, 3, -5] }}>
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={1} />
        <spotLight position={[3, 5, 1]} angle={0.3} />
        <Suspense fallback={null}>
          <Model005 position={[0, 0, 0]} />
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