import './model001.css';
import { Suspense } from "react";
import React from "react"
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model2 from "./components/Model2";

function Stand() {
  return (
    <mesh position={[-0.1, -0.47, -.07]} rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[.7, 0.02, 1.4]} />
      <meshLambertMaterial attach="material" color="#002800" />
    </mesh>
  );
}

export default function Model001page() {
  return (
    <Wrapper className="App">
      <Canvas clasName="canvas" camera={{ fov: 40, position: [2, 1, 0] }}>
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[3, 3, 1]} angle={0.3} />
        <Stand />
        <Suspense fallback={null}>
          <Model2 position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: white;

  canvas {
    height: 800px;
    width: auto;
  }
`;