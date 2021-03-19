import React from 'react'
import { screen, render } from '@testing-library/react'
import Footer from './Footer'

test('renders the portfolio link', () => {
  render(<Footer />);
  const linkElement = screen.getByText('Portfolio');
  expect(linkElement).toBeInTheDocument();
});

test('renders the github link', () => {
  render(<Footer />);
  const linkElement = screen.getByText('GitHub');
  expect(linkElement).toBeInTheDocument();
});

test('renders the contact link', () => {
  render(<Footer />);
  const linkElement = screen.getByText('Contact');
  expect(linkElement).toBeInTheDocument();
});
