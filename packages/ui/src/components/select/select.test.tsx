import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from './select';

describe('<Select>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Select />);
  });
});




