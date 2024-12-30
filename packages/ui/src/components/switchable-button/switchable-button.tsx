import { ReactNode } from 'react';

import classes from './switchable-button.module.css';
import { createPolymorphicComponent, getClassNames } from '../../utils';
import { Box, BoxProps } from '../box';

const cx = getClassNames(classes);

interface SwitchableButtonProps extends BoxProps {
  /**
   * 활성화 상태일 때 보여질 컴포넌트
   */
  activeComponent: ReactNode;
  /**
   * 비활성화 상태일 때 보여질 컴포넌트
   */
  inactiveComponent: ReactNode;
  /**
   * 활성화 여부
   */
  isActive: boolean;
}

/**
 * @description 컴포넌트를 조건에 따라 스위칭할 수 있는 버튼
 * @example checkout 아이콘을 checked에 따라서 아이콘을 스위칭함
 */
const _SwitchableButton = ({
  activeComponent,
  inactiveComponent,
  isActive,
  ...rest
}: SwitchableButtonProps) => {
  return (
    <Box as="button" className={cx('root')} {...rest}>
      {isActive ? activeComponent : inactiveComponent}
    </Box>
  );
};

export const SwitchableButton = createPolymorphicComponent<
  'button',
  SwitchableButtonProps
>(_SwitchableButton);
