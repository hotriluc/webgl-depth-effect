import classes from './Cursor.module.scss';

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorTarget, setCursorTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX - 25;
      const y = e.clientY - 25;

      setCursorTarget({ x, y });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className={classes.cursor}
      style={{
        transform: `translate(${cursorTarget.x}px, ${cursorTarget.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
