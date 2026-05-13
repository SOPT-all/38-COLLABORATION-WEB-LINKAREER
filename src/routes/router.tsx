import { createBrowserRouter } from 'react-router';

import AppLayout from '@/layout/AppLayout';
import HomePage from '@pages/home/HomePage';
import MentoPage from '@pages/mento/MentoPage';
import RecruitPage from '@pages/recruit/RecruitPage';
import RecruitDetailPage from '@pages/recruitDetail/RecruitDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'recruit',
        element: <RecruitPage />,
      },
      {
        path: 'recruit/detail',
        element: <RecruitDetailPage />,
      },
      {
        path: 'mento',
        element: <MentoPage />,
      },
    ],
  },
]);

export default router;
