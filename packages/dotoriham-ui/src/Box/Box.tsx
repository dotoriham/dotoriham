import { createPolymorphicComponent } from '@dotoriham/core';
import { DefaultProps } from '@dotoriham/styles';
import { css } from '@emotion/react';

export interface BoxProps extends DefaultProps {}

const _Box = ({ ...rest }: BoxProps) => {
  return (
    <div {...rest} css={Wrapper}>
      Button
    </div>
  );
};

const Wrapper = css``;

export const Box = createPolymorphicComponent<'button', BoxProps>(_Box);
