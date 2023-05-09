import React from 'react';

import { createPolymorphicComponent } from '@dotoriham/core';
import styled from '@emotion/styled';

export interface ButtonProps {}

const _Button = ({ ...rest }: ButtonProps) => {
	return <Wrapper {...rest}>Button</Wrapper>;
};

const Wrapper = styled.button``;

export const Button = createPolymorphicComponent<'button', ButtonProps>(
	_Button,
);
