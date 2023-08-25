import styles from './Style.module.sass';
import { InfoCard } from '../InfoCard/InfoCard';
import { Cards } from '../../types/cards';

interface IProps {
    cards: Cards[]
}

export const HowIsGoing = ({ cards }: IProps) => {
    return (
        <section>
            <h2 className={styles.title}>КАК ПРОХОДИТ</h2>
            <ul className={styles.grid}>
                {
                    cards && cards.map(card => (
                        <li key={card.id}>
                            <InfoCard card={card} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}