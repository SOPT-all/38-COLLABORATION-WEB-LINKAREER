import { createBrowserRouter } from "react-router";
import HomePage from "@pages/home/HomePage";
import RecruitPage from "@pages/recruit/RecruitPage";
import RecruitDetailPage from "@pages/recruitDetail/RecruitDetailPage";
import MentoPage from "@pages/mento/MentoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recruit",
    element: <RecruitPage />,
  },
  {
    path: "/recruit/detail",
    element: <RecruitDetailPage />,
  },
  {
    path: "/mento",
    element: <MentoPage />,
  },
]);

export default router;
