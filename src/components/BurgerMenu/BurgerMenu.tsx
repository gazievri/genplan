import { HashLink } from 'react-router-hash-link';
import styles from './Style.module.sass';

interface IProps {
    action: () => void,
    isOpened: boolean,
}

function BurgerMenu({ action, isOpened }: IProps) {
  const handleClick = () => {
    action();
  };

  return (
    <nav className={isOpened ? styles.container__opened : styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <HashLink to="/#howIsGoing" onClick={handleClick}>КАК ПРОХОДИТ</HashLink>
        </li>
        <li className={styles.item}>
          <HashLink to="/#media" onClick={handleClick}>СМИ О СТАЖИРОВКЕ</HashLink>
        </li>
        <li className={styles.item}>
          <HashLink to="/#faq" onClick={handleClick}>FAQ</HashLink>
        </li>
      </ul>
      <ul className={styles.contacts}>
        <li>
          <a className={styles.link} href="https://t.me/genplan_institute" target="_blank" rel="noreferrer">Telegram</a>
        </li>
        <li>
          <a className={styles.link} href="https://vk.com/genplanmos" target="_blank" rel="noreferrer">Vkontakte</a>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
