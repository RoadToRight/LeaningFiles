import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Suit from './Suit'
import { OrbitControls, ScrollControls } from '@react-three/drei'

function App() {
 

  return (
    <div className='main'>
      <Canvas camera={{fov:20}}>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <ScrollControls pages={3}>
        <Suit />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
