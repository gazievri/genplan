import { MediaCardType } from '../../types/mediaCard.ts';
import styles from './Style.module.sass';

interface IProps {
    card: MediaCardType,
    index: number,
    activeCard: number,
}

function MediaCard({ card, index, activeCard }: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img
          className={index !== activeCard ? styles.image : styles.image__active}
          src={card.image}
          alt={card.title}
        />
      </div>
      <a className={styles.link} target="_blank" href={card.link} rel="noreferrer">{card.title.toLocaleUpperCase()}</a>
      <p className={styles.text}>{card.description}</p>
    </div>
  );
}

export default MediaCard;
