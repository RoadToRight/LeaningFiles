
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as Three from "three"
const A = () => {
   let model = useGLTF("./mac.glb")
     let model2 = useGLTF("./multi.glb")
     let meshes = {};
     let tex = useTexture("./gradient.jpg")
 
 model2.scene.traverse((e) => {
         meshes[e.name] = e;
     })
     console.log(meshes)
 // console.log(meshes)
     // meshes.screen.rotation.x = Three.MathUtils.degToRad(180);
     // meshes.matte.material.map = tex;
     // meshes.matte.material.emissiveIntensity = 0.2;
     // meshes.matte.material.metalness = 0;
     // meshes.matte.material.roughness = 1;
  
   
       
     let data = useScroll();
    useFrame((state,delta) => {
        meshes.Cylinder.rotation.x += delta 
    })
     // useFrame((state,delta) => {
     // //  console.log(data.offset)
     //    meshes.screen.rotation.x = Three.MathUtils.degToRad(180 - (data.offset * 90))
     //   //  meshes.matte.material.emissiveIntensity = 1 - (data.offset * 1);
     // })
 
   return (
   
     <group position={[0, -7, 20]} >
     {/* <primitive object={meshes.matte} />
     <primitive object={meshes.Cube} /> */}
     <primitive object={meshes.Sphere} />
     <primitive object={meshes.Cylinder} />
   </group>
     
   )
 }
export default A