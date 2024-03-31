import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/shared/components/Layout';

// Pages
import { articleRoutes } from '@/features/articles/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...articleRoutes],
  },
]);
