import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Popover } from './popover';

describe('<Popover>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Popover />);
  });
});




