import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'

test('renders the header with default text when no text prop is provided', () => {
  render(<Header />);
  const headerElement = screen.getByText("typos");
  expect(headerElement).toBeInTheDocument();
});

test('renders the header with custom text when passed the text prop', () => {
  const headerText: string = "tsisawesome";

  render(<Header text={headerText}/>);
  const headerElement = screen.getByText(headerText);
  expect(headerElement).toBeInTheDocument();
})