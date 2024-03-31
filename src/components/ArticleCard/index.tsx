import { FC, ReactNode } from 'react';

import { IArticle } from '@/models/article.model';
import { Link } from 'react-router-dom';

interface IArticleCardProps {
  article: IArticle;
  children?: ReactNode;
}

const ArticleCard: FC<IArticleCardProps> = ({ article }) => {
  return (
    <Link
      to={`/article/${encodeURIComponent(article?.uri)}`}
      className='border border-gray-200 rounded p-4'
    >
      {article?.media?.length > 0 &&
      article?.media?.[0]?.['media-metadata']?.length > 0 ? (
        <img
          src={
            article?.media?.[0]?.['media-metadata']?.[2]?.url ||
            'https://placehold.co/440x293'
          }
          alt={article?.title}
          className='w-full h-auto mb-4 rounded'
        />
      ) : (
        <img
          src='https://placehold.co/440x293'
          alt={article?.title}
          className='w-full h-auto mb-4 rounded'
        />
      )}
      <h2 className='text-lg font-semibold'>{article?.title}</h2>
      <p className='text-sm text-gray-500'>{article?.abstract}</p>
    </Link>
  );
};

export default ArticleCard;
