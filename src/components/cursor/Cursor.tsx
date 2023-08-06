import classes from './Cursor.module.scss';
import { motion } from 'framer-motion';

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
    <motion.div
      className={classes.cursor}
      animate={{
        x: cursorTarget.x,
        y: cursorTarget.y,
      }}
      transition={{
        ease: [0.33, 1, 0.68, 1],
        duration: 0.2,
      }}
    ></motion.div>
  );
};

export default Cursor;
