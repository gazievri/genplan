import { MediaCardType } from '../../types/mediaCard.ts';
import styles from './Style.module.sass';

interface IProps {
    card: MediaCardType
}

function MediaCard({ card }: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img className={styles.image} src={card.image} alt={card.title} />
      </div>
      <a className={styles.link} target="_blank" href={card.link} rel="noreferrer">{card.title.toLocaleUpperCase()}</a>
      <p className={styles.text}>{card.description}</p>
    </div>
  );
}

export default MediaCard;
