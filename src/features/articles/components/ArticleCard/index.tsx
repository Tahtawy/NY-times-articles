import { FC, useEffect, useState, ReactNode } from 'react';

import ArticleImage from '@/shared/components/ArticleImage';

import { IArticle } from '@/features/articles/models/article.model';
import { Link } from 'react-router-dom';

interface IArticleCardProps {
  article: IArticle;
  children?: ReactNode;
}

const ArticleCard: FC<IArticleCardProps> = ({ article }) => {
  const [imgSrc, setImgSrc] = useState<string>('');

  useEffect(() => {
    if (
      article &&
      article?.media?.length > 0 &&
      article?.media?.[0]?.['media-metadata']?.length > 0
    ) {
      setImgSrc(article?.media?.[0]?.['media-metadata']?.[2]?.url);
    }
  }, [article]);

  return (
    <Link
      to={`/article/${encodeURIComponent(article?.uri)}`}
      className='border border-gray-200 rounded p-4'
    >
      <ArticleImage
        src={imgSrc}
        className='!mb-4'
        alt={article?.title}
        defaultSrc='https://placehold.co/440x293'
      />
      <h2 className='text-lg font-semibold'>{article?.title}</h2>
      <p className='text-sm text-gray-500'>{article?.abstract}</p>
    </Link>
  );
};

export default ArticleCard;
