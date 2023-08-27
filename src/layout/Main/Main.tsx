import styles from './Style.module.sass';
import { Cards } from '../../types/cards.ts';
import Home from '../../pages/Home.tsx';
import { MediaCardType } from '../../types/mediaCard.ts';

interface IProps {
    cards: Cards[],
    mediaCards: MediaCardType[],
}

export function Main({ cards, mediaCards }: IProps) {
  return (
    <main className={styles.main}>
      <Home cards={cards} mediaCards={mediaCards} />
    </main>
  );
}

export default Main;
