import { Outlet } from 'react-router';

import BottomNavigationBar from '@components/bottomNavigationBar/BottomNavigationBar';
import Footer from '@components/footer/Footer';
import GlobalNavigationBar from '@components/globalNavigationBar/GlobalNavigationBar';

import * as styles from './AppLayout.css';

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <GlobalNavigationBar />
      <main className={styles.main}>
        <Outlet />
        <Footer />
      </main>

      <BottomNavigationBar />
    </div>
  );
};

export default AppLayout;
