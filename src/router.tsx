import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout';

// Pages
import Home from '@/pages/Home';
import ArticleDetails from '@/pages/ArticleDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'article/:uri',
        element: <ArticleDetails />,
      },
    ],
  },
]);
