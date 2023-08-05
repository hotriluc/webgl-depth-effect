import { useThree } from '@react-three/fiber';
import { useGallery } from '../../store/useGallery';

import Slide from './Slide';

const Slideshow = () => {
  const { slides, domSlides } = useGallery();
  const { viewport, size } = useThree();

  const { currentSlide } = useGallery();

  return (
    <>
      {slides.map((slide, i) => {
        const img = domSlides[i].querySelector('img');
        const bounds = img?.getBoundingClientRect();

        if (!img || !bounds) return;

        const scaleX = (viewport.width * bounds.width) / size.width;
        const offsetX = (bounds.left * viewport.width) / size.width;

        const scaleY = (viewport.height * bounds.height) / size.height;
        const offsetY = (bounds.top * viewport.height) / size.height;

        return (
          <Slide
            key={i}
            imgUrl={slide.imgUrl}
            depthUrl={slide.depthMapUrl}
            threshold={slide.threshold}
            imgSize={{ width: img.naturalWidth, height: img.naturalHeight }}
            scale={[scaleX, scaleY, 1]}
            position={[
              -(viewport.width / 2) + scaleX / 2 + offsetX,
              viewport.height / 2 -
                scaleY / 2 -
                offsetY +
                viewport.height * currentSlide,
              0,
            ]}
          />
        );
      })}
    </>
  );
};

export default Slideshow;
