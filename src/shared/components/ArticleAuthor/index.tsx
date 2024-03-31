import { FC } from 'react';

interface IArticleAuthorProps {
  authors: string | undefined;
}

const ArticleAuthor: FC<IArticleAuthorProps> = ({ authors }) => {
  return (
    <>
      {authors?.split(', ').map((author, index) => (
        <p key={index}>
          <a href='#' className='underline font-semibold'>
            {author}
          </a>
          {index < authors?.split(', ').length - 1 && <span>, </span>}
        </p>
      ))}
    </>
  );
};

export default ArticleAuthor;
