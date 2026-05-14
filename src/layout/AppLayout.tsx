import { Outlet } from 'react-router';

import BottomNavigationBar from '@components/bottomNavigationBar/BottomNavigationBar';
import Footer from '@components/footer/Footer';
import GlobalNavigationBar from '@components/globalNavigationBar/GlobalNavigationBar';

const AppLayout = () => {
  return (
    <>
      <GlobalNavigationBar />
      <main>
        <Outlet />
        <Footer />
      </main>

      <BottomNavigationBar />
    </>
  );
};

export default AppLayout;
