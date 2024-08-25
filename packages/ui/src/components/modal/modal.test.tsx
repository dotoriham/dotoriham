import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { Modal } from './modal';

describe('<Modal>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Modal />);
  });
});
