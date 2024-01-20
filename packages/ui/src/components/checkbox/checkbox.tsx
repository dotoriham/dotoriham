import { SwitchableButton } from '../switchable-button';
import { CheckboxIcon, CheckboxSelectedIcon } from '@dotoriham/icons';

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox = ({ checked }: CheckboxProps) => {
  return (
    <SwitchableButton
      isActive={checked}
      activeComponent={<CheckboxSelectedIcon />}
      inactiveComponent={<CheckboxIcon />}
    />
  );
};
