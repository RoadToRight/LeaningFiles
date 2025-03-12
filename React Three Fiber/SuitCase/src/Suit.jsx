import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as Three from "three"
const Suit = () => {

    let model = useGLTF("./suitcase.glb")
    let tex = useTexture("./red.jpg")
    let Scroll = useScroll();
    let meshes = {}
    model.scene.traverse((e) => {
        meshes[e.name] = e;
    })
    meshes.cutpiece.material.map = tex;
    meshes.cutpiece.rotation.x = Three.MathUtils.degToRad(90);
   


    useFrame((state,delta) => {
        meshes.cutpiece.rotation.x = Three.MathUtils.degToRad(90 + (90 * Scroll.offset));
        console.log(Scroll.offset)
        if(Math.abs(Scroll.offset - 0.12) < 0.01){
            console.log("a")
            meshes.cutpiece.position.y = 0 + Scroll.offset
        }else{
            meshes.cutpiece.position.y = 0
        }
       
    })
  return (
    <group>
        <primitive object={model.scene}></primitive>
    </group>
  )
}

export default Suit