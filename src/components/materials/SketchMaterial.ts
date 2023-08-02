import * as THREE from 'three';

import { shaderMaterial } from '@react-three/drei';
import { Object3DNode } from '@react-three/fiber';

import sketchShaderFragment from '../../shaders/sketch/fragment.glsl';
import sketchShaderVertex from '../../shaders/sketch/vertex.glsl';

type SketchMaterialUniforms = {
  uMap?: THREE.Texture;
  uTime?: number;
  uImageSize?: THREE.Vector2;
  uPlaneSize?: THREE.Vector2;
  uViewportSize?: THREE.Vector2;
};

export type SketchMaterialRef = THREE.ShaderMaterial & SketchMaterialUniforms;
export type SketchMaterialImpl = Object3DNode<
  THREE.ShaderMaterial,
  typeof THREE.ShaderMaterial & SketchMaterialUniforms
>;

export const SketchMaterial = shaderMaterial(
  {
    uMap: null,
    uTime: 0,
    uImageSize: new THREE.Vector2(0, 0),
    uPlaneSize: new THREE.Vector2(0, 0),
    uViewportSize: new THREE.Vector2(0, 0),
  },
  sketchShaderVertex,
  sketchShaderFragment
);
