import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from 'axios';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
