import { Suspense, useRef, useEffect, useState} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Fork = () => {
    const ref = useRef();
    
    useFrame((state, delta) => {
      ref.current.rotation.y -= delta * 0.75;
      
    })  

    const Fork = useGLTF('./FireForkTop2.glb')

    return (
      <mesh ref={ref} rotation={[0, 0, 0]}>
        

        <ambientLight 
            intensity={1}
            />
        <hemisphereLight intensity={1.5}
        groundColor="black"/>
        <pointLight
        position={[1,0.5,0]} 
        intensity={1}/>
        <spotLight
          position={[15,20,5]}
          angle ={20}
          penumbra={1}
          intensity={50}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={Fork.scene}
          position= {[0,-.5,0]}
          
          />
      </mesh>
      
    )
  }
  
  const ForkCanvas = () => {
    return (
      
      <Canvas
        frameloop = "always"
        shadows
        camera= {{position: [0,-8, 0], fov: 30, rotateX: -Math.PI/8, rotateY: Math.PI/2.25 }}
      >
        <Suspense fallback={ <CanvasLoader/>}>
          
        <Fork/>
        
        </Suspense>
        <OrbitControls 
            
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            
          />
        <Preload all />
      </Canvas>
    )
  }
  
  export default ForkCanvas