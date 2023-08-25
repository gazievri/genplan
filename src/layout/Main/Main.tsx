import styles from './Style.module.sass';
import { HowIsGoing } from '../../components/HowIsGoing/HowIsGoing';
import { About } from '../../components/About/About';
import { Faq } from '../../components/Faq/Faq';
import { Cards } from '../../types/cards';

interface IProps {
    cards: Cards[]
}

export const Main = ({ cards }: IProps) => {
    return (
        <main className={styles.main}>
            <HowIsGoing cards={cards} />
            <About />
            <Faq />
        </main>
    )
};