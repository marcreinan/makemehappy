import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renderiza o App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Humor/i);
  expect(linkElement).toBeInTheDocument();
});
