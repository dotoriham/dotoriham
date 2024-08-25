import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Dimmed } from './dimmed';

describe('<Dimmed>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Dimmed />);
  });
});




