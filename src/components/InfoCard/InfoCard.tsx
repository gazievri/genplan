import styles from './Style.module.sass';
import { Cards } from '../../types/cards.ts';

interface IProps {
    card: Cards
}

function InfoCard({ card }: IProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.text}>{card.description}</p>
    </article>
  );
}

export default InfoCard;
