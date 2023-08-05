import { useEffect, useMemo } from 'react';
import { useGallery } from '../../store/useGallery';
import classes from './Slider.module.scss';
import { ISlide } from '../../interfaces/Slide.interface';

const rows = 3;
const cols = 3;

const Slider = () => {
  const { slides, setDomSlides } = useGallery();

  useEffect(() => {
    const figures = document.querySelectorAll('figure');
    setDomSlides(Array.from(figures));
  }, [setDomSlides]);

  const slideGrid = useMemo(() => {
    const arr: ISlide[][] = new Array(rows)
      .fill([])
      .map(() => new Array(cols).fill([]));

    let row = 0;
    let col = 0;

    for (let i = 0; i < slides.length; i++) {
      arr[row][col] = slides[i];

      // If the element last in the row then move to the new
      // otherwise move to another el in the row
      if ((col + 1) % cols === 0) {
        row += 1;
        col = 0;
      } else {
        col++;
      }

      if (row >= rows) {
        break;
      }
    }

    return arr;
  }, [slides]);

  return (
    <div className={classes.slider}>
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
