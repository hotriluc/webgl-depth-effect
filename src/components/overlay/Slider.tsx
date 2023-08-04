import { useEffect } from 'react';
import { useGallery } from '../../store/useGallery';
import classes from './Slider.module.scss';

const Slider = () => {
  const { slides, setDomSlides } = useGallery();

  useEffect(() => {
    const figures = document.querySelectorAll('figure');
    setDomSlides(Array.from(figures));
  }, [setDomSlides]);

  return (
    <div className={classes.slider}>
      <section className={classes.slide}>
        <figure className={classes.figure}>
          <img src={slides[0].imgUrl} alt="" />
        </figure>
      </section>

      <section className={classes.slide}>
        <figure className={classes.figure}>
          <img src={slides[0].imgUrl} alt="" />
        </figure>
      </section>

      <section className={classes.slide}>
        <figure className={classes.figure}>
          <img src={slides[0].imgUrl} alt="" />
        </figure>
      </section>
    </div>
  );
};

export default Slider;
