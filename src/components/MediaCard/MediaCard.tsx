/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MediaCardType } from '../../types/mediaCard.ts';
import styles from './Style.module.sass';

interface IProps {
    card: MediaCardType,
    index: number,
    activeCard: number,
    action: (ind: number) => void,
}

function MediaCard({
  card, index, activeCard, action,
}: IProps) {
  const handleClick = () => {
    action(index);
  };
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img
          className={index !== activeCard ? styles.image : styles.image__active}
          src={card.image}
          alt={card.title}
          onClick={() => handleClick()}
        />
      </div>
      <a className={styles.link} target="_blank" href={card.link} rel="noreferrer">{card.title.toLocaleUpperCase()}</a>
      <p className={styles.text}>{card.description}</p>
    </div>
  );
}

export default MediaCard;
