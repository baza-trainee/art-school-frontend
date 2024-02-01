import HeaderContacts from './HeaderContacts';
import HeaderNavigation from './HeaderNavigation';

import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

const Header = ({ contacts }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className={styles.headerWrapper}>
      {windowWidth >= 1280 && <HeaderContacts contacts={contacts} />}
      <HeaderNavigation windowWidth={windowWidth} contacts={contacts} />
    </header>
  );
};

export default Header;
