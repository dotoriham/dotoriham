import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Box } from './box';

describe('Box', () => {
  it('should render', () => {
    render(<Box />);
  });

  it("Box의 className이 'box'인지 확인", () => {
    const { container } = render(<Box className="box" />);
    expect(container.firstChild).toHaveClass('box');
    screen.debug();
  });
});
