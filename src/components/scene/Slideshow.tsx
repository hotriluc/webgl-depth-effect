import { useThree } from '@react-three/fiber';
import { useGallery } from '../../store/useGallery';

import Slide from './Slide';

const Slideshow = () => {
  const { domFigures } = useGallery();
  const { viewport, size } = useThree();

  return (
    <>
      {domFigures.map((el, i) => {
        const img = el.querySelector('img');
        const bounds = img?.getBoundingClientRect();

        if (!bounds) return;

        const scaleX = (viewport.width * bounds.width) / size.width;
        const offsetX = (bounds.left * viewport.width) / size.width;

        const scaleY = (viewport.height * bounds.height) / size.height;
        const offsetY = (bounds.top * viewport.height) / size.height;

        return (
          <Slide
            key={i}
            img={img?.src || '/blossom.webp'}
            scale={[scaleX, scaleY, 0]}
            position={[
              -(viewport.width / 2) + scaleX / 2 + offsetX,
              viewport.height / 2 - scaleY / 2 - offsetY,
              0,
            ]}
          />
        );
      })}
    </>
  );
};

export default Slideshow;
