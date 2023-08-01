import * as THREE from 'three';

import { shaderMaterial } from '@react-three/drei';
import { Object3DNode } from '@react-three/fiber';

import sketchShaderFragment from '../../shaders/sketch/fragment.glsl';
import sketchShaderVertex from '../../shaders/sketch/vertex.glsl';

type SketchMaterialUniforms = {
  u_texture?: THREE.Texture;
  u_time?: number;
  u_resolution?: THREE.Vector2;
};

export type SketchMaterialRef = THREE.ShaderMaterial & SketchMaterialUniforms;
export type SketchMaterialImpl = Object3DNode<
  THREE.ShaderMaterial,
  typeof THREE.ShaderMaterial & SketchMaterialUniforms
>;

export const SketchMaterial = shaderMaterial(
  {
    u_texture: null,
    u_time: 0,
    u_resolution: new THREE.Vector3(1, 1),
  },
  sketchShaderVertex,
  sketchShaderFragment
);
