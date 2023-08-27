import styles from './Style.module.sass';
import { Cards } from '../../types/cards.ts';
import Home from '../../pages/Home.tsx';

interface IProps {
    cards: Cards[]
}

export function Main({ cards }: IProps) {
  return (
    <main className={styles.main}>
      <Home cards={cards} />
    </main>
  );
}

export default Main;
