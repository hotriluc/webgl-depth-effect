import * as THREE from 'three';

import { shaderMaterial } from '@react-three/drei';
import sketchShaderFragment from '../../shaders/sketch/fragment.glsl';
import sketchShaderVertex from '../../shaders/sketch/vertex.glsl';

import { Object3DNode, extend } from '@react-three/fiber';

const SketchMaterial = shaderMaterial(
  {
    u_time: 0,
    u_resolution: new THREE.Vector2(1.0, 1.0),
  },
  sketchShaderVertex,
  sketchShaderFragment
);
extend({ SketchMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    sketchMaterial: Object3DNode<THREE.ShaderMaterial, typeof SketchMaterial>;
  }
}

const Plane = () => {
  return (
    <mesh>
      <planeGeometry />
      <sketchMaterial />
    </mesh>
  );
};

export default Plane;
