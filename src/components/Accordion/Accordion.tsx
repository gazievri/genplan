import styles from './Style.module.sass';
import { FaqItem } from '../../types/faqitem.ts';

interface IProps {
    item: FaqItem,
    lastItem: boolean,
    activeItem: string | null,
    setActiveItem: () => void,
}

function Accordion({
  item, lastItem, activeItem, setActiveItem,
}: IProps) {
  return (
    <div className={lastItem ? styles.accordion__last : styles.accordion}>
      <label className={styles.accordion__heading} htmlFor={`accordion-${item.id}`}>
        {item.title}
      </label>
      <input type="checkbox" className={styles.accordion__checkbox} name="accardion" id={`accordion-${item.id}`} onChange={setActiveItem} checked={activeItem === item.id} />
      <div className={styles.accordion__content}>
        <p className={styles.text}>
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
