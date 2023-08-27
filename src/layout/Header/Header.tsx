import { NavLink } from 'react-router-dom';
import styles from './Style.module.sass';
import logoIcon from '../../assets/img/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logoIcon} alt="Логотип институт генплана Москвы" />
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink to="">Как проходит</NavLink>
            </li>
            <li>
              <NavLink to="">СМИ о стажировке</NavLink>
            </li>
            <li>
              <NavLink to="">FAQ</NavLink>
            </li>
          </ul>
        </nav>
        {/* <div className={styles.burger} /> */}
      </div>
    </header>
  );
}

export default Header;
