import { ReactNode } from 'react';

import { Checkbox, Flex, FlexProps } from '@dotoriham/ui';

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
      {withArrow && <div>Arrow</div>}
    </Flex>
  );
};
