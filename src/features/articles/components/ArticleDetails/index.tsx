import { FC, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '@/shared/components/Loader';
import ArticleImage from '@/shared/components/ArticleImage';
import ArticleAuthor from '@/shared/components/ArticleAuthor';
import ArticleDate from '@/features/articles/components/ArticleDate';

import { useArticelDetails } from '@/features/articles/hooks/useArticelDetails';

import { IMultiMedia } from '@/features/articles/models/article.model';

interface IArticleDetailsProps {
  children?: ReactNode;
}

const ArticleDetailsSection: FC<IArticleDetailsProps> = () => {
  const { uri } = useParams();
  const { isLoading, data } = useArticelDetails(uri || '');

  if (isLoading) {
    return <Loader />;
  }

  const imageUrl = data?.response?.docs?.[0]?.multimedia?.find(
    (item: IMultiMedia) =>
      item.subType === 'superJumbo' || item.subType === 'jumbo'
  )?.url;

  return (
    <section className='container flex flex-col items-center'>
      <article className='max-w-2xl border-b border-gray-200 mb-6'>
        <h1 className='text-4xl italic font-bold mb-2'>
          {data?.response?.docs[0].headline.main}
        </h1>
        <p className='mb-7 text-2xl text-gray-500'>
          {data?.response?.docs?.[0]?.abstract}
        </p>
      </article>

      <figure>
        <ArticleImage
          src={imageUrl}
          baseUrl='http://www.nytimes.com/'
          defaultSrc='https://placehold.co/1024x680'
          alt={data?.response?.docs?.[0]?.snippet || 'article image'}
        />
      </figure>

      <article className='max-w-2xl text-text-secondary text-sm'>
        <div className='mb-5'>
          <div className='itemalign-self-start mb-1'>
            <ArticleAuthor
              authors={data?.response?.docs?.[0]?.byline?.original}
            />
          </div>

          <ArticleDate date={data?.response?.docs?.[0]?.pub_date} />
        </div>

        <p className='text-xl max-w-2xl'>
          {data?.response?.docs?.[0]?.lead_paragraph}
        </p>
      </article>
    </section>
  );
};

export default ArticleDetailsSection;
