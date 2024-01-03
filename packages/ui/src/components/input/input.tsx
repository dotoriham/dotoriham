import { HTMLAttributes } from 'react';
import classes from './input.module.css';

export type InputVariant = 'default' | 'filled' | 'text';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

export const Input = () => {
  return <input type="text" />;
};
