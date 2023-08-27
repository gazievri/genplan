import { useState } from 'react';
import styles from './Style.module.sass';
import Accordion from '../Accordion/Accordion.tsx';
import FAQ_ITEMS from '../../data/faq.ts';
import { FaqItem } from '../../types/faqitem.ts';

function Faq() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  function check(item: FaqItem): boolean {
    return FAQ_ITEMS.indexOf(item) === FAQ_ITEMS.length - 1;
  }

  function handleClick(item: FaqItem) {
    if (!activeItem) setActiveItem(item.id);
    if (activeItem === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item.id);
    }
  }

  return (
    <section className={styles.section} id="faq">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>F. A. Q.</h2>
        {
            FAQ_ITEMS.map((item) => (
              <Accordion
                item={item}
                key={item.id}
                lastItem={check(item)}
                setActiveItem={() => handleClick(item)}
                activeItem={activeItem}
              />
            ))
        }
      </div>
    </section>
  );
}

export default Faq;
