import { FC, ReactNode } from 'react';

interface IArticleImageProps {
  src: string | undefined;
  alt: string;
  defaultSrc: string;
  baseUrl?: string;
  className?: string;
  children?: ReactNode;
}

export const ArticleImage: FC<IArticleImageProps> = ({
  src,
  alt,
  baseUrl = '',
  defaultSrc,
  className,
}) => {
  return (
    <img
      src={`${baseUrl}${src}` || defaultSrc}
      alt={alt}
      className={`w-full h-auto mb-6 rounded ${className}`}
    />
  );
};

export default ArticleImage;
