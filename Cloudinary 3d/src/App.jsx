import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cloudinary } from "@cloudinary/url-gen"
import Model from './Model'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { DirectionalLight } from 'three'

function App() {

  const modelUrl = "https://res.cloudinary.com/dp6b6emb9/image/upload/v1740739999/Cloudinary%203D/models/headphone_surv2d.glb";
  const cld = new Cloudinary({
    cloud: {
      cloudName: "your-cloud-name", // Replace with your Cloudinary cloud name
    },
  });

  return (
    <div style={{height:"100vh"}}>
     <Canvas >
      <ambientLight />
      <Environment 
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
      ]}
      />
           <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Model url={modelUrl} />
    </Canvas>
    </div>
  )
}

export default App
