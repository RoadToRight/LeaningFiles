import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { SelectiveBloom } from "@react-three/postprocessing";
import React, { useEffect, useState } from "react";
import * as Three from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Scene2 = () => {
  const model1 = useGLTF("./mac.glb");
  const [meshes, setMeshes] = useState({});
  const [loadedObj, setLoadedObj] = useState(null);
  const tex = useTexture("./armchair-019-nrm-specular-4k.png");
  const obj = useLoader(OBJLoader, "./armchair-019.obj");

  useEffect(() => {
    if (obj && obj.children[0]) {
      setLoadedObj(obj);
      obj.children[0].material.map = tex;
      obj.children[0].material.emissiveIntensity = 0;
    }
  }, [obj, tex]);

//   useEffect(() => {
//     if (model1 && model1.scene) {
//       const tempMeshes = {};
//       model1.scene.traverse((e) => {
//         tempMeshes[e.name] = e;
//       });
//       setMeshes(tempMeshes);
//     }
//   }, [model1]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, 5]} intensity={1} />
      <group>
        {loadedObj?.children[0] && <primitive object={loadedObj.children[0]} />}
        {/* {model1?.scene && <primitive object={model1.scene} />} */}
        {/* Uncomment and modify these as needed */}
        {/* <primitive object={meshes.back} />
        <primitive object={meshes.back_1} />
        <primitive object={meshes.back_2} />
        <primitive object={meshes.body} />
        <primitive object={meshes.body_1} />
        <primitive object={meshes.body_2} /> */}
      </group>
      {/* Uncomment and configure SelectiveBloom as needed */}
      {/* <SelectiveBloom
        lights={[lightRef1, lightRef2]}
        selection={[specificPartRef]}
        intensity={1.0}
        luminanceThreshold={0}
        luminanceSmoothing={0}
        mipmapBlur
      /> */}
    </>
  );
};

export default Scene2;
