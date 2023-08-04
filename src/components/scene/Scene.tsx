import { OrbitControls } from '@react-three/drei';

import Slideshow from './Slideshow';

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Slideshow />
    </>
  );
};

export default Scene;
