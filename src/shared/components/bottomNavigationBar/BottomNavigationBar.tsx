import { NAV_ITEMS } from '@constants/bottomNavigation';
import { useLocation, useNavigate } from 'react-router';

import * as styles from './BottomNavigationBar.css';

const BottomNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigationClick = (path?: string) => {
    if (!path) {
      return;
    }

    void navigate(path);
  };

  return (
    <nav className={styles.mainContainer}>
      {NAV_ITEMS.map((item) => {
        const hasPath = 'path' in item;
        const isActive = hasPath && item.path === location.pathname;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <button
            key={item.key}
            type="button"
            className={styles.navItem({ active: isActive })}
            onClick={() =>
              handleNavigationClick(hasPath ? item.path : undefined)
            }
          >
            <Icon width="2.4rem" height="2.4rem" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigationBar;
