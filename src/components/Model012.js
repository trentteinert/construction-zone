/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model012.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} position={[0.27, 0.39, -0.1]} />
    </group>
  )
}

useGLTF.preload('/model012.gltf')
