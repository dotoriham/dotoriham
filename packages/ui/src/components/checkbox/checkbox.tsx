import { CheckboxIcon, CheckboxSelectedIcon } from '@dotoriham/icons';

import { SwitchableButton } from '../switchable-button';

interface CheckboxProps {
  checked?: boolean;
  /**
   * @default 24
   */
  size?: number;
  onClick?: () => void;
}

export const Checkbox = ({
  checked = false,
  onClick,
  size = 24,
}: CheckboxProps) => {
  return (
    <SwitchableButton
      isActive={checked}
      onClick={onClick}
      activeComponent={<CheckboxSelectedIcon fontSize={size} />}
      inactiveComponent={<CheckboxIcon fontSize={size} />}
    />
  );
};
