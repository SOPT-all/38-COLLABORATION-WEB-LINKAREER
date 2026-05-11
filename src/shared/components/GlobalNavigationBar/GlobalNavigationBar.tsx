import { Link } from 'react-router';

import IcBell from '@assets/svg/IcBell';
import IcBookMark from '@assets/svg/IcBookmark';
import IcMenu2 from '@assets/svg/IcMenu2';
import Logo from '@assets/svg/Logo';

import * as styles from './globalNavigationBar.css';

const ACTION_ITEMS = [
  { label: '알림', Icon: IcBell },
  { label: '북마크', Icon: IcBookMark },
  { label: '메뉴', Icon: IcMenu2 },
] as const;

const GlobalNavigationBar = () => {
  return (
    <>
      <header className={styles.container}>
        <section className={styles.frame}>
          <Link to="/" className={styles.logo} aria-label="Linkareer home">
            <Logo className={styles.logoIcon} />
          </Link>

          <menu className={styles.content}>
            {ACTION_ITEMS.map(({ label, Icon }) => (
              <li key={label}>
                <button
                  className={styles.iconButton}
                  type="button"
                  aria-label={label}
                >
                  <Icon className={styles.icon} aria-hidden={true} />
                </button>
              </li>
            ))}
          </menu>
        </section>
      </header>
    </>
  );
};

export default GlobalNavigationBar;
