import {
  useEffect, useState, useRef,
} from 'react';
import styles from './Style.module.sass';

interface IProps {
    children: any,
    quantaty: number,
}

function Slider({ children, quantaty } : IProps) {
  const windowRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [cardWidth, setCardWidth] = useState(310);
  const [balance, setBalance] = useState(38);

  const handleClickPrev = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + cardWidth + 24;
      return Math.min(newOffset, 0);
    });
  };

  const handleClickNext = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - cardWidth - 24;
      return Math.max(newOffset, windowSize - balance);
    });
  };

  useEffect(() => {
    const windowQ = window.innerWidth;
    if (windowQ <= 500) {
      setCardWidth(269);
      setBalance(80);
    } else {
      setCardWidth(310);
      setBalance(38);
    }
  }, []);

  useEffect(() => {
    if (windowRef) {
      const windowWidth = windowRef.current.offsetWidth;
      const length = quantaty * cardWidth + (quantaty - 1) * 24;
      const dif = length - windowWidth;
      setWindowSize(-dif);
    }
  }, [cardWidth, quantaty]);

  return (
    <div className={styles.container}>
      <button className={styles.arrowPrev} onClick={handleClickPrev} aria-label="Предидущий слайд" type="button" />
      <button className={styles.arrowNext} onClick={handleClickNext} aria-label="Следующий слайд" type="button" />
      <div className={styles.window} ref={windowRef}>
        <div
          className={styles.items}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Slider;
