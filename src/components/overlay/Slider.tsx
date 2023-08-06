import { useEffect, useMemo } from 'react';
import { useGallery } from '../../store/useGallery';
import classes from './Slider.module.scss';
import { ISlide } from '../../interfaces/Slide.interface';

const Slider = () => {
  const { slides, dimension, setDomSlides, nextSlide, prevSlide } =
    useGallery();

  useEffect(() => {
    const figures = document.querySelectorAll('figure');
    setDomSlides(Array.from(figures));
  }, [setDomSlides]);

  const slideGrid = useMemo(() => {
    const arr: ISlide[][] = new Array(dimension.rows)
      .fill([])
      .map(() => new Array(dimension.cols).fill([]));

    let row = 0;
    let col = 0;

    for (let i = 0; i < slides.length; i++) {
      arr[row][col] = slides[i];

      // If the element last in the row then move to the new
      // otherwise move to another el in the row
      if ((col + 1) % dimension.cols === 0) {
        row += 1;
        col = 0;
      } else {
        col++;
      }

      if (row >= dimension.rows) {
        break;
      }
    }

    return arr;
  }, [slides, dimension]);

  return (
    <div className={classes.slider}>
      <h1 className={classes.title}>HANFU</h1>
      <nav className={classes.buttons}>
        <button
          className={classes.button}
          onClick={() => {
            prevSlide();
          }}
        >
          prev
        </button>

        <button
          className={classes.button}
          onClick={() => {
            nextSlide();
          }}
        >
          next
        </button>
      </nav>

      {slideGrid.map((row, rowIndex) => (
        <section key={`slide-row-${rowIndex}`} className={classes.slide}>
          {row.map((el, index) => (
            <figure key={index} className={classes.figure}>
              <img src={el.imgUrl} alt="" />
            </figure>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Slider;
