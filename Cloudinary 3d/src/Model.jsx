import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useGLTF } from '@react-three/drei';
const Model = ({ url }) => {
    const gltf = useGLTF(url)
    return <primitive object={gltf.scene} />;
}

export default Model