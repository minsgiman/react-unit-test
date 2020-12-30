import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from './App';

describe('App', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(<App />);

    expect(await axe(container)).toHaveNoViolations();
  });
});



