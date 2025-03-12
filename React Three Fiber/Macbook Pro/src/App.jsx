import { useRef, useState } from 'react'
import './App.css'
import Macbook from './Macbook'
import { Canvas } from '@react-three/fiber'
import {  Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import Box from "./Box"
import A from './a'
function App() {
  
    const objectRef = useRef();
  
    // Function to handle mouse movement
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
  
      // Update object rotation
      if (objectRef.current) {
        objectRef.current.rotation.x = y * Math.PI;
        objectRef.current.rotation.y = x * Math.PI;
      }
    }

  return (
    <div onMouseMove={handleMouseMove} className={`h-[100vh]`}>
    <Canvas camera={{fov:20,position:[0,-7,120]}}>
      <Environment 
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
      ]}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {/* <EffectComposer>
     
        <Bloom  luminanceThreshold={0.8} luminanceSmoothing={0} mipmapBlur/>
      <ToneMapping adaptive/>
      </EffectComposer> */}
      <ScrollControls pages={3}>
    <Macbook objectRef={objectRef}/> 
    {/* <A/> */}
    </ScrollControls>
    {/* <Box /> */}
    </Canvas>
      
    </div>
  )
}

export default App
