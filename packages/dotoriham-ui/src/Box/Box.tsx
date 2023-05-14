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

const Wrapper = css`
  background-color: red;
  width: 100px;
  height: 200px;
`;

export const Box = createPolymorphicComponent<'button', BoxProps>(_Box);
