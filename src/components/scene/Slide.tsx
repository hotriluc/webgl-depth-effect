import * as THREE from 'three';

import { useRef } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';

import { SketchMaterial, SketchMaterialRef } from '../materials/SketchMaterial';

extend({ SketchMaterial });

interface ISlideProps {
  img: string;
  position: THREE.Vector3 | [x: number, y: number, z: number];
  scale: THREE.Vector3 | [x: number, y: number, z: number];
}

const Slide = ({ img, position, scale }: ISlideProps) => {
  const imgTexture = useLoader(THREE.TextureLoader, img);
  const ref = useRef<THREE.Mesh<THREE.PlaneGeometry, SketchMaterialRef>>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.material.u_texture = imgTexture;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <planeGeometry />
      <sketchMaterial />
    </mesh>
  );
};

export default Slide;
