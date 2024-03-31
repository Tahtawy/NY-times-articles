import { FC } from 'react';

import { formatDate } from '@/helpers/date.utils';

interface IArticleDateProps {
  date: string | undefined;
}

const ArticleDate: FC<IArticleDateProps> = ({ date }) => {
  return <span>{formatDate(date as string)}</span>;
};

export default ArticleDate;
