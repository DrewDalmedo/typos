import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('header should exist', () => {
  render(<App />);
  const headerElement = screen.getByText("typos");
  expect(headerElement).toBeInTheDocument();
});

test('footer should exist', () => {
  render(<App />)
  const footerElement = document.getElementsByClassName('footer');
  expect(footerElement).toBeInTheDocument();
});