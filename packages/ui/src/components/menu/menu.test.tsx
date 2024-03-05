import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Menu } from './menu';

describe('<Menu>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Menu />);
  });
});




