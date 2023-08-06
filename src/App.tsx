import { Canvas } from '@react-three/fiber';
import Scene from './components/scene/Scene';
import Slider from './components/overlay/Slider';

import Cursor from './components/cursor/Cursor';

const App = () => {
  return (
    <>
      <Cursor />
      <Slider />
      <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default App;
