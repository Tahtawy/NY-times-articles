import { FC, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '@/components/Loader';

import { useArticelDeails } from '@/hooks/useArticelDeails';
import { formatDate } from '@/helpers/date.utils';
import { IMultiMedia } from '@/models/article.model';

interface IArticleDetailsProps {
  children?: ReactNode;
}

const ArticleDetailsSection: FC<IArticleDetailsProps> = () => {
  const { uri } = useParams();
  const { isLoading, data } = useArticelDeails(uri || '');

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
        <img
          className='mb-6'
          src={`${imageUrl ? `http://www.nytimes.com/${imageUrl}` : 'https://placehold.co/1024x680'}`}
          alt='Article Image'
        />
      </figure>

      <article className='max-w-2xl text-text-secondary text-sm'>
        <div className='mb-5'>
          <p className='itemalign-self-start mb-1'>
            {data?.response?.docs?.[0]?.byline?.original
              ?.split(', ')
              .map((author, index) => (
                <>
                  <a href='#' key={author} className='underline font-semibold'>
                    {author}
                  </a>
                  {index <
                    data?.response?.docs?.[0]?.byline?.original?.split(', ')
                      .length -
                      1 && <span>, </span>}
                </>
              ))}
          </p>

          <span>
            {formatDate(data?.response?.docs?.[0]?.pub_date as string)}
          </span>
        </div>

        <p className='text-xl max-w-2xl'>
          {data?.response?.docs?.[0]?.lead_paragraph}
        </p>
      </article>
    </section>
  );
};

export default ArticleDetailsSection;
