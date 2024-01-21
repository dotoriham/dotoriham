import { SwitchableButton } from '../switchable-button';
import { CheckboxIcon, CheckboxSelectedIcon } from '@dotoriham/icons';

interface CheckboxProps {
  checked: boolean;
  /**
   * @default 24
   */
  size?: number;
  onClick?: () => void;
}

export const Checkbox = ({ checked, onClick, size = 24 }: CheckboxProps) => {
  return (
    <SwitchableButton
      isActive={checked}
      onClick={onClick}
      activeComponent={<CheckboxSelectedIcon fontSize={size} />}
      inactiveComponent={<CheckboxIcon fontSize={size} />}
    />
  );
};
