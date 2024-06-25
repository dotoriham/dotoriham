import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Counter } from './counter';
import '@testing-library/jest-dom';

describe('Counter', () => {
  test('should render', () => {
    render(<Counter />);
    screen.debug();
  });

  test('카운터의 onIncrease가 클릭되었을 때, 카운터가 1 증가하는지 확인', () => {
    render(<Counter />);
    const increaseButton = screen.getByText('증가');
    const count = screen.getByTestId('count');
    increaseButton.click();
    expect(count).toHaveTextContent('1');
  });
});
