import { useTexture } from '@react-three/drei'
import React from 'react'

const Box = () => {
    let tex = useTexture("./gradient.jpg")
  return (
    <mesh>
        <boxGeometry args={[4,4,4]}/>
        <meshStandardMaterial map={tex}/>
    </mesh>
  )
}

export default Box