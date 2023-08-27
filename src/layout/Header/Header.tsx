import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import styles from './Style.module.sass';
import logoIcon from '../../assets/img/logo.svg';
import useMediaQuery from '../../utils/useMediaQuery.ts';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu.tsx';

function Header() {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const [isOpened, setIsOpened] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpened((prev) => !prev);
    document.body.style.overflow = `${isOpened ? '' : 'hidden'}`;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logoIcon} alt="Логотип институт генплана Москвы" />
          {
          isTablet ? <button type="button" className={isOpened ? styles.close : styles.burger} aria-label="Открыть меню" onClick={toggleBurgerMenu} />
            : (
              <nav>
                <ul className={styles.list}>
                  <li>
                    <HashLink to="/#howIsGoing">Как проходит</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#media">СМИ о стажировке</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#faq">FAQ</HashLink>
                  </li>
                </ul>
              </nav>
            )
        }
        </div>
      </header>
      {isTablet && <BurgerMenu action={toggleBurgerMenu} isOpened={isOpened} />}
    </>

  );
}

export default Header;
