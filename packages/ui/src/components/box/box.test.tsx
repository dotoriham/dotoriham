import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Box } from './box';

describe('Box', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<Box>hihi</Box>);
  });

  test('Box의 className를 지정할 수 있다.', () => {
    const { container } = render(<Box className="box">hihi</Box>);
    expect(container.firstChild).toHaveClass('box');
  });

  test('Box의 Element를 변경할 수 있다 (다형성)', () => {
    const { container } = render(<Box as="span">hihi</Box>);
    expect(container.firstChild).toBeInstanceOf(HTMLSpanElement);
  });

  test('Box의 style을 지정할 수 있다', () => {
    const { container } = render(<Box style={{ color: 'red' }}>hihi</Box>);
    expect(container.firstChild).toHaveStyle('color: red');
  });

  test('Box의 systemStyle을 지정할 수 있다', () => {
    const { container } = render(
      <Box m={1} p={1} bg="red">
        hihi
      </Box>,
    );
    expect(container.firstChild).toHaveStyle('margin: 1px');
    expect(container.firstChild).toHaveStyle('padding: 1px');
    expect(container.firstChild).toHaveStyle('background-color: red');
  });
});
