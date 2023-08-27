import styles from './Style.module.sass';
import MediaCard from '../MediaCard/MediaCard.tsx';
import { MediaCardType } from '../../types/mediaCard.ts';

interface IProps {
  mediaCards: MediaCardType[],
}

function MediaBlock({ mediaCards }: IProps) {
  return (
    <section className={styles.section} id="media">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>СМИ О СТАЖИРОВКЕ</h2>
        <div className={styles.card_container}>
          {
            mediaCards.map((card) => <MediaCard card={card} key={card.id} />)
          }
        </div>

      </div>
    </section>
  );
}

export default MediaBlock;
