import NavList from '../NavList/NavList';
import styles from './BurgerMenu.module.scss';
import CloseIcon from '@/components/Icons/CloseIcon';
import clsx from 'clsx';
import SocialList from '../SosialList/SocialList';
const BurgerMenu = ({ showBurgerMenu, setShowBurgerMenu }) => {
  console.log('showBurgerMenu: ', showBurgerMenu);

  const handelClickBurgerButton = showBurgerMenu =>
    setShowBurgerMenu(!showBurgerMenu);
  return (
    <div
      className={clsx(
        styles.burgerMenuWrapper,
        showBurgerMenu ? '' : styles.hidden
      )}
    >
      <button
        type="button"
        className={styles.burgerMenuCloseButton}
        onClick={() => handelClickBurgerButton(showBurgerMenu)}
      >
        <CloseIcon />
      </button>

      <div className={styles.burgerMenuContent}>
        <NavList />
      </div>
      <SocialList />
    </div>
  );
};

export default BurgerMenu;