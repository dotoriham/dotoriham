import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Bottomsheet } from './bottomsheet';

describe('<Bottomsheet>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Bottomsheet />);
  });
});




