import { FC } from 'react';

import ArticleCard from '../ArticleCard';

import { usePopularArticles } from '@/features/articles/hooks/usePopularArticles';
import Loader from '@/shared/components/Loader';

const ArticleList: FC = () => {
  const { isLoading, data } = usePopularArticles();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold my-8 text-center'>
        Most Popular Articles
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {data?.results?.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
