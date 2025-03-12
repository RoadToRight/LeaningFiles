import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { SelectiveBloom } from "@react-three/postprocessing";
import React, { useEffect, useRef, useState } from "react";
import * as Three from "three"
import { OBJLoader } from "three/examples/jsm/Addons.js";
const Scene = () => {
  let model1 = useGLTF("./mac.glb");
  const [loadedObj, setLoadedObj] = useState(null);
  const [meshes, setMeshes] = useState({});
  // let specificPartRef = useRef();
  // const lightRef1 = useRef();
  // const lightRef2 = useRef();
  let tex = useTexture("./red.jpg")
  const obj = useLoader(OBJLoader,"./armchair-019.obj")
 
  useEffect(() => {
   
    // console.log(obj)
    if (obj && obj.children[0]) {
      console.log(obj.children[0].material.map)
      setLoadedObj(obj);
      
      obj.children[0].material.map = tex
      obj.children[0].material.emissiveIntensity = 0
    }
  }, [obj,tex]);
//  console.log(loadedObj)

  // useEffect(() => {
  //   if (model1 && model1.scene) {
  //     const tempMeshes = {};
  //     model1.scene.traverse((e) => {
  //       tempMeshes[e.name] = e;
  //     });
  //     tempMeshes.matte.material.map = tex
  //     tempMeshes.matte.material.emissiveIntensity = 0;
  //     console.log(tempMeshes)
  //     setMeshes(tempMeshes);
  //   }
  // }, [model1]);

  // console.log(meshes.matte ? meshes.matte.material : meshes.matte )
  // meshes.matte.material.map = tex;

  // const tempMeshes = {};
  // model1.scene.traverse((e) => {
  //   tempMeshes[e.name] = e;
  // });
  // console.log(tempMeshes)
  // console.log(model1)
  // tempMeshes.matte.rotation.x = Three.MathUtils.degToRad(90)
  // tempMeshes.matte.position.z = -11
  // tempMeshes.matte.position.y = -0.5
  // tempMeshes.matte.material.map = tex;
  // tempMeshes.matte.material.emissiveIntensity = 0;
  //  tempMeshes.matte.material.metalness = 0;
  //  tempMeshes.matte.material.roughness = 1;
  
  // useEffect(() => {
  //   if(loadedObj?.children[0]){
  //     loadedObj.children[0].material = tex;
  //   }
   
   
  // }, [])
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
    
        position={[-10, -10, 5]}
        intensity={1}
      />
      
      <group>
      
      {loadedObj?.children[0] && <primitive object={loadedObj.children[0]} />}

      {/* <primitive object={model1.scene}/> */}
        {/* <primitive object={meshes.back}/>
        <primitive object={meshes.back_1}/>
        <primitive object={meshes.back_2}/>
        <primitive object={meshes.body}/>
        <primitive object={meshes.body_1}/>
        <primitive object={meshes.body_2}/> */}
        {/* <primitive object={meshes.matte}  ref={specificPartRef}/> */}
        {/* {model1?.scene && meshes.matte && <primitive object={meshes.matte} />} */}
     
      </group>
{/*  
         <SelectiveBloom
          lights={[lightRef1, lightRef2]}
          selection={[specificPartRef]}
          intensity={1.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          mipmapBlur
        /> 
     */}
    </>
  );
};

export default Scene;
