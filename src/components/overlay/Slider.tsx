import { useEffect } from 'react';
import { useGallery } from '../../store/useGallery';
import classes from './Slider.module.scss';

const slides = [
  {
    img: '/blossom.webp',
  },
  {
    img: '/blossom.webp',
  },
  {
    img: '/blossom.webp',
  },
];

const Slider = () => {
  const { setDomFigures } = useGallery();

  useEffect(() => {
    const figures = document.querySelectorAll('figure');
    setDomFigures(Array.from(figures));
  }, [setDomFigures]);

  return (
    <div className={classes.slider}>
      <section className={classes.slide}>
        <figure className={classes.figure}>
          <img src={slides[0].img} alt="" />
        </figure>
      </section>

      <section className={classes.slide}>
        <figure className={classes.figure}>
          <img src={slides[0].img} alt="" />
        </figure>
      </section>

      <section className={classes.slide}>
        <figure className={classes.figure}>
          <img src={slides[0].img} alt="" />
        </figure>
      </section>
    </div>
  );
};

export default Slider;
