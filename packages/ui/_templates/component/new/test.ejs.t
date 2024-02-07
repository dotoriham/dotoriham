---
to: "src/components/<%= componentName %>/<%= componentName %>.test.tsx"
---

import { afterEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { <%= PascalCaseComponentName %> } from './<%= componentName %>';

describe('<<%= PascalCaseComponentName %>>', () => {
  afterEach(() => {
    screen.debug();
  });
  test('should render', () => {
    render(<<%= PascalCaseComponentName %> />);
  });
});




