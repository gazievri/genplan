import {
  useEffect, useState, useRef,
} from 'react';
import styles from './Style.module.sass';
import MediaCard from '../MediaCard/MediaCard.tsx';
import type { MediaCardType } from '../../types/mediaCard.ts';

interface IProps {
    cards: MediaCardType[],
}

function Slider({ cards } : IProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [cardWidth, setCardWidth] = useState(310);
  const [activeCard, setActiveCard] = useState(0);

  const handleClickPrev = () => {
    setActiveCard((currentActiveCard) => {
      const newActiveCard = currentActiveCard - 1;
      return Math.max(newActiveCard, 0);
    });
    setOffset((currentOffset) => {
      const newOffset = currentOffset + cardWidth + 24;
      return Math.min(newOffset, 0);
    });
  };

  const handleClickNext = () => {
    setActiveCard((currentActiveCard) => {
      const newActiveCard = currentActiveCard + 1;
      return Math.min(newActiveCard, cards.length - 1);
    });

    setOffset((currentOffset) => {
      const newOffset = currentOffset - cardWidth - 24;
      return Math.max(newOffset, windowSize);
    });
  };

  useEffect(() => {
    const windowQ = window.innerWidth;
    if (windowQ <= 500) {
      setCardWidth(269);
    } else {
      setCardWidth(310);
    }
  }, []);

  useEffect(() => {
    if (windowRef && windowRef.current) {
      const windowWidth = windowRef.current.offsetWidth;
      const length = cards.length * cardWidth + (cards.length - 1) * 24;
      const dif = length - windowWidth;
      setWindowSize(-dif);
    }
  }, [cardWidth, windowRef]);

  return (
    <div className={styles.container}>
      <button className={styles.arrowPrev} onClick={handleClickPrev} aria-label="Предидущий слайд" type="button" />
      <button className={styles.arrowNext} onClick={handleClickNext} aria-label="Следующий слайд" type="button" />
      <div className={styles.window} ref={windowRef}>
        <div
          className={styles.items}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {cards.map((card, index: number) => (
            <MediaCard card={card} key={card.id} index={index} activeCard={activeCard} />))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
