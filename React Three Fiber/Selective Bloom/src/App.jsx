import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import styled from 'styled-components'
import Scene from './Scene'
import { EffectComposer } from '@react-three/postprocessing'
import Scene2 from './Scene2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppDiv>
       {/* camera={{position:[10,10,80]}} */}
      <Canvas>
        <OrbitControls/>
        <Environment 
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
      ]}
      />
      <EffectComposer>
        <Scene2 />
        </EffectComposer>
      </Canvas>
    </AppDiv>
  )
}

export default App;

const AppDiv = styled.div`

  height: 100vh;

`
