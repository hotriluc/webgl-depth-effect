import * as THREE from 'three';
import { clamp, lerp } from 'three/src/math/MathUtils.js';

import { useEffect, useRef, useState } from 'react';
import {
  ThreeEvent,
  Vector3,
  extend,
  useFrame,
  useLoader,
} from '@react-three/fiber';

import { SketchMaterial, SketchMaterialRef } from '../materials/SketchMaterial';
import { ISize } from '../../interfaces/Size.interface';
import { I2DCoords } from '../../interfaces/Coords.interface';
import { IThreshold } from '../../interfaces/Threshold.interface';

extend({ SketchMaterial });

interface ISlideProps {
  imgUrl: string;
  depthUrl: string;
  imgSize: ISize;
  threshold: IThreshold;
  position: Vector3;
  scale: Vector3;
}

const maxTilt = 12;

const Slide = ({
  imgUrl,
  imgSize,
  depthUrl,
  threshold,
  position,
  scale,
}: ISlideProps) => {
  const ref = useRef<THREE.Mesh<THREE.PlaneGeometry, SketchMaterialRef>>(null);

  const [target, setTarget] = useState<I2DCoords>({ x: 0, y: 0 });
  const [current, setCurrent] = useState<I2DCoords>({ x: 0, y: 0 });

  const [imgTexture, depthTexture] = useLoader(THREE.TextureLoader, [
    imgUrl,
    depthUrl,
  ]);

  useEffect(() => {
    const x = lerp(current.x, target.x, 0.1);
    const y = lerp(current.y, target.y, 0.1);

    setCurrent({ x, y });
  }, [target]);

  useFrame(() => {
    if (ref.current) {
      ref.current.material.uMap = imgTexture;
      ref.current.material.uDepthMap = depthTexture;

      ref.current.material.uImageSize?.set(imgSize.width, imgSize.height);
      ref.current.material.uPlaneSize?.set(
        ref.current.scale.x,
        ref.current.scale.y
      );

      // ref.current.scale.y = lerp(
      //   ref.current.scale.y,
      //   currentSlide ? scale[1] : 0,
      //   0.01
      // );

      ref.current.material.uMouse?.set(current.x, current.y);
      ref.current.material.uThreshold?.set(
        threshold.horizontal,
        threshold.vertical
      );
    }
  });

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    const { pointer } = e;

    const y = clamp(pointer.y, -maxTilt, maxTilt) / maxTilt;
    const x = -clamp(pointer.x, -maxTilt, maxTilt) / maxTilt;

    setTarget({ x, y });
  };

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
      onPointerMove={onPointerMove}
    >
      <planeGeometry />
      <sketchMaterial />
    </mesh>
  );
};

export default Slide;
