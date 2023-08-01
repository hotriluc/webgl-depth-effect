import { Canvas } from '@react-three/fiber';
import Scene from './components/scene/Scene';
import Slider from './components/overlay/Slider';

const App = () => {
  return (
    <>
      <Slider />
      <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default App;
