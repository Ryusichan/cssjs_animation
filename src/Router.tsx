import { Navigate, useRoutes } from "react-router-dom";
// layouts
import ArtworkLayout from "./layouts/ArtworkLayout";
import Project01 from "./page/Project01";
import Test from "./page/Project01";
import Project02 from "./page/Project02";
import Project03 from "./page/Project03";
import Project04 from "./page/Project04";
import Project05 from "./page/Project05";
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <ArtworkLayout />,
      children: [
        { path: "/", element: <Project01 /> },
        { path: "project02", element: <Project02 /> },
        { path: "project03", element: <Project03 /> },
        { path: "project04", element: <Project04 /> },
        { path: "project05", element: <Project05 /> },
        { path: "project06", element: <Project05 /> },
        // { path: 'user', element: <User /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
