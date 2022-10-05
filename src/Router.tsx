import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import ArtworkLayout from './layouts/ArtworkLayout';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <ArtworkLayout />,
    //   children: [
        // { path: 'app', element: <DashboardApp /> },
        // { path: 'user', element: <User /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
    //   ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
