import { Outlet } from 'react-router';

import GlobalNavigationBar from '@components/GlobalNavigationBar/GlobalNavigationBar';

const AppLayout = () => {
  return (
    <>
      <GlobalNavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
