import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';

export const articleRoutes = [
  {
    path: '',
    element: <ArticleList />,
  },
  {
    path: 'article/:uri',
    element: <ArticleDetails />,
  },
];
