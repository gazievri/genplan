import styles from './Style.module.sass';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h2 className={styles.title}>&copy; {new Date().getFullYear()} ИНСТИТУТ ГЕНПЛАНА МОСКВЫ</h2>
                    <ul className={styles.list_column}>
                        <li>
                            <a href="!#" target='_blank' className={styles.link}>Политика обработки персональных данных</a>
                        </li>
                        <li>
                            <a href="!#" target='_blank' className={styles.link}>Пользовательское соглашение</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h2 className={styles.title}>МЫ НАХОДИМСЯ ПО АДРЕСУ:</h2>
                    <address>
                        <a href="https://yandex.ru/maps/org/institut_genplana_moskvy_gau/1053740274/?ll=37.592599%2C55.769980&z=14" target='_blank' className={styles.link}>
                            <p className={styles.text}>«Институт Генплана Москвы» 125047,</p>
                            <p className={styles.text}>Москва, ул. Гашека, 14/13 (АО Моспроект)</p>
                        </a>
                    </address>
                </div>
                <address className={styles.block}>
                    <h2 className={styles.title}>ПО ВОПРОСАМ: <a href="mailto:egurvich@genplanmos.ru">EGURVICH@GENPLANMOS.RU</a></h2>
                    <ul className={styles.list_row}>
                        <li>
                            <a className={styles.link} href="https://t.me/genplan_institute" target='_blank'>Telegram</a>
                        </li>
                        <li>
                            <a className={styles.link} href="https://vk.com/genplanmos" target='_blank'>Vkontakte</a>
                        </li>
                    </ul>
                </address>
            </div>
        </footer>
    )
}

