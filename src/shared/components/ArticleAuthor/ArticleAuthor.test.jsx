import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleAuthor from './index';

test('renders multiple author links with commas when authors prop is provided', () => {
  render(<ArticleAuthor authors='John Doe, Jane Smith' />);

  const authorLinks = screen.getAllByRole('link');
  expect(authorLinks).toHaveLength(2);
  expect(authorLinks[0]).toHaveTextContent('John Doe');
  expect(authorLinks[1]).toHaveTextContent('Jane Smith');
  expect(screen.getByText(',')).toBeInTheDocument();
});

test('renders nothing when authors prop is undefined', () => {
  render(<ArticleAuthor authors={undefined} />);

  expect(screen.queryByRole('link')).not.toBeInTheDocument();
  expect(screen.queryByText(',')).not.toBeInTheDocument();
});

test('renders a single author link without a comma when there is only one author', () => {
  render(<ArticleAuthor authors='John Doe' />);

  const authorLink = screen.getByRole('link');
  expect(authorLink).toHaveTextContent('John Doe');
  expect(screen.queryByText(',')).not.toBeInTheDocument();
});
