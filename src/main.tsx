import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactQueryProvider from '@/ReactQueryProvider';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </React.StrictMode>
);
