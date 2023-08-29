import styles from './Style.module.sass';
import InfoCard from '../InfoCard/InfoCard.tsx';
import { Cards } from '../../types/cards.ts';

interface IProps {
    cards: Cards[]
}

function HowIsGoing({ cards }: IProps) {
  return (
    <section id="howIsGoing" className={styles.section}>
      <h2 className={styles.title}>КАК ПРОХОДИТ</h2>
      <ul className={styles.grid}>
        { cards && cards.map((card) => (
          <li key={card.id}>
            <InfoCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HowIsGoing;
