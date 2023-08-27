import { useState } from 'react';
import styles from './Style.module.sass';

export function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > 500
      || document.documentElement.scrollTop > 500
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button
      className={isVisible ? styles.btn : styles.btnHidden}
      id="btnToTop"
      onClick={topFunction}
      aria-label="На верх"
      type="button"
    />
  );
}

export default ToTop;
