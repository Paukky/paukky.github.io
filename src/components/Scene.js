import { OrthographicCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { Group } from 'three';
import {Cat,Desk, Chair} from'../models';

const Scene = () => {
  const box = useRef();
  let radian = 2 * Math.PI * (25 / 360);
  useFrame(({camera}) => {
    box.current && void (box.current.rotation.y -= 0.0010, box.current.rotation.x += 0.00)
  })
  return (
  
    <React.Fragment>
        
        <ambientLight/>
        <pointLight position={[10,50, 30]} intensity={0.5} />
        <OrthographicCamera
        position={[0,-1,0]}
        rotation={[0, 0, 0]}
        
        >    
        <mesh ref={box} position={[1,0,0]}>
            <Cat/>
            <Desk/>
            <Chair/>
        </mesh>    
        </OrthographicCamera>
    </React.Fragment>
  )
}

export default Scene