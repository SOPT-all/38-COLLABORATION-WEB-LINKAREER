import { Link } from 'react-router';

import IcBell from '@assets/svg/IcBell';
import IcBookmarkWhite from '@assets/svg/IcBookmarkWhite';
import IcMenu2 from '@assets/svg/IcMenu2';
import Logo from '@assets/svg/Logo';

import * as styles from './GlobalNavigationBar.css';

const ACTION_ITEMS = [
  { label: '알림', Icon: IcBell },
  { label: '북마크', Icon: IcBookmarkWhite },
  { label: '메뉴', Icon: IcMenu2 },
] as const;

interface GloabalNavigationBarProps {
  isSticky?: boolean;
}

const GlobalNavigationBar = ({
  isSticky = false,
}: GloabalNavigationBarProps) => {
  return (
    <>
      <header className={styles.container({ isSticky })}>
        <Link to="/" className={styles.logo} aria-label="Linkareer home">
          <Logo className={styles.logoIcon} />
        </Link>

        <ul className={styles.content}>
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
        </ul>
      </header>
    </>
  );
};

export default GlobalNavigationBar;
