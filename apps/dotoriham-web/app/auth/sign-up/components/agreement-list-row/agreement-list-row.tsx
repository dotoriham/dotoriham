import { ReactNode } from 'react';

import { ArrowIcon } from '@dotoriham/icons';
import { Checkbox, Flex, FlexProps, color } from '@dotoriham/ui';

interface AgreementListRowProps extends FlexProps {
  withArrow?: boolean;
  onClick?: () => void;
  checked?: boolean;
  children: ReactNode;
}

export const AgreementListRow = ({
  children,
  checked,
  withArrow,
  ...rest
}: AgreementListRowProps) => {
  return (
    <Flex align="center" justify="space-between" {...rest}>
      <Flex align="center">
        <Checkbox checked={checked} />
        {children}
      </Flex>
      {withArrow && <ArrowIcon fontSize={20} color={color.gray6} />}
    </Flex>
  );
};
