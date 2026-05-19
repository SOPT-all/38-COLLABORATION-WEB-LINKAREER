import { createBrowserRouter } from 'react-router';

import AppLayout from '@/layout/AppLayout';
import RecruitDetailLayout from '@/layout/RecruitDetailLayout';
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
        path: 'mento',
        element: <MentoPage />,
      },
    ],
  },
  {
    path: '/recruit/detail',
    element: <RecruitDetailLayout />,
    children: [
      {
        index: true,
        element: <RecruitDetailPage />,
      },
    ],
  },
]);

export default router;
