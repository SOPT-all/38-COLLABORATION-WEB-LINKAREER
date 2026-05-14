import { Outlet } from 'react-router';

import Footer from '@components/footer/Footer';
import GlobalNavigationBar from '@components/globalNavigationBar/GlobalNavigationBar';

import BottomNavigationBar from '@components/bottomNavigationBar/BottomNavigationBar';


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
