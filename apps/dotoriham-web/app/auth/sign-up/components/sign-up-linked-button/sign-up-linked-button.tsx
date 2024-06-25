import { Flex, Typography, fixedColor } from '@dotoriham/ui';
import Link from 'next/link';

import { ROUTES } from '../../../../../constants/routes';

export const SignUpLinkedButton = () => {
  return (
    <Flex align="center">
      <Typography type="system_14_400">이미 회원이신가요?</Typography>
      <Typography
        as={Link}
        href={ROUTES.signin({
          referrer: 'sign-up',
        })}
        type="system_14_500"
        style={{
          textDecoration: 'underline',
        }}
        ml={12}
        color={fixedColor.green9}>
        로그인
      </Typography>
    </Flex>
  );
};
