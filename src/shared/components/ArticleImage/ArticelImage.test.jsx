import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleImage from './index';

test('renders the image with the provided src', () => {
  const src = 'https://example.com/image.jpg';
  const alt = 'Image description';
  const defaultSrc = 'https://example.com/default.jpg';

  render(<ArticleImage src={src} alt={alt} defaultSrc={defaultSrc} />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', src);
  expect(image).toHaveAttribute('alt', alt);
});

test('renders the defaultSrc when src is not provided', () => {
  const alt = 'Image description';
  const defaultSrc = 'https://example.com/default.jpg';

  render(<ArticleImage alt={alt} defaultSrc={defaultSrc} />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', defaultSrc);
  expect(image).toHaveAttribute('alt', alt);
});

test('renders with the provided className', () => {
  const src = 'https://example.com/image.jpg';
  const alt = 'Image description';
  const className = 'custom-class';

  render(<ArticleImage src={src} alt={alt} className={className} />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute(
    'class',
    `w-full h-auto mb-6 rounded ${className}`
  );
});

test('appends baseUrl correctly when provided', () => {
  const src = 'image.jpg';
  const baseUrl = 'https://cdn.example.com/images/';
  const alt = 'Image description';
  const defaultSrc = 'https://example.com/default.jpg';

  render(
    <ArticleImage
      src={src}
      baseUrl={baseUrl}
      alt={alt}
      defaultSrc={defaultSrc}
    />
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute(
    'src',
    'https://cdn.example.com/images/image.jpg'
  );
});
