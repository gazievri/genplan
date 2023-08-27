import styles from './Style.module.sass';

function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>ПРАКТИКА В&nbsp;ИНСТИТУТЕ ГЕНПЛАНА МОСКВЫ</h1>
        <p className={styles.subtitle}>ЖДЕМ СТУДЕНТОВ, ИЗУЧАЮЩИХ СПЕЦИАЛЬНОСТИ:</p>
        <p className={styles.text}>
          АРХИТЕКТОР, ИНЖЕНЕР, ЭКОНОМИСТ, СОЦИОЛОГ, ЭКОЛОГ, АНАЛИТИК, ГИС-СПЕЦИАЛИСТ, УРБАНИСТ
        </p>
      </div>
    </section>
  );
}

export default Hero;
