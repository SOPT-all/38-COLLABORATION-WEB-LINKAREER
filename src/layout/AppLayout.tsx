import { Outlet } from 'react-router';

import Footer from '@components/footer/Footer';
import GlobalNavigationBar from '@components/GlobalNavigationBar/GlobalNavigationBar';

const AppLayout = () => {
  return (
    <>
      <GlobalNavigationBar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default AppLayout;
