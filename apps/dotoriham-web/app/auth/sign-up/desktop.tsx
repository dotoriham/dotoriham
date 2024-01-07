import { SignUpTitle } from '@/app-modules/sign-up/components/sign-up-title';
import { GoogleAuthButton } from '@/components/google-auth-button/google-auth-button';
import classes from './desktop.module.css';
import {
  getClassNames,
  Spacing,
  Border,
  Flex,
  Box,
  Typography,
} from '@dotoriham/ui';

const cx = getClassNames(classes);

export const DesktopPage = () => {
  return (
    <main>
      <SignUpTitle />
      <div className={cx('inner')}>
        <Spacing size={30} />
        <GoogleAuthButton />

        <Spacing size={28} />

        <Flex align="center">
          <Border />
          <Typography type="system_16_400">or</Typography>
          <Border />
        </Flex>
        <Spacing size={28} />
      </div>
    </main>
  );
};
