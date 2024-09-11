import { useRoutes } from 'react-router-dom';

import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from 'src/components/Layout';
import { Landing } from 'src/features/landing';
import { Onboarding } from 'src/features/onboarding';
import { Loading } from 'src/features/misc';

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const Health = () => {
  return <div>OK</div>;
};

const getRoutesByPermissions = () => {
  const baseRoutes = [{ path: '', element: <Landing /> }];

  const additionalRoutes = [{ path: 'onboarding', element: <Onboarding />, requiredRoles: [''] }];

  return [...baseRoutes, ...additionalRoutes, { path: '*', element: <Navigate to="." /> }];
};

export const AppRoutes = () => {
  const publicRoutes = [{ path: 'health', element: <Health /> }];

  const privateRoutes = [
    {
      path: '/',
      element: <App />,
      children: getRoutesByPermissions(),
    },
  ];

  const routes = [
    ...publicRoutes,
    ...privateRoutes,
    { path: '/', element: <Loading /> },
    { path: '*', element: <Navigate to="." /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
