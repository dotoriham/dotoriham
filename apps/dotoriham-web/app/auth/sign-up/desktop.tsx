import {
  getClassNames,
  Spacing,
  Border,
  Flex,
  Box,
  Typography,
} from '@dotoriham/ui';


import { SignUpFormSection } from '@/app-modules/sign-up/components/sign-up-form-section';
import { SignUpTitle } from '@/app-modules/sign-up/components/sign-up-title';
import { GoogleAuthButton } from '@/components/google-auth-button/google-auth-button';
import classes from './desktop.module.css';

const cx = getClassNames(classes);

export const DesktopPage = () => {
  return (
    <main>
      <SignUpTitle />
      <div className={cx('inner')}>
        <Spacing size={30} />
        <GoogleAuthButton />

        <Spacing size={28} />
        <구분선 />
        <Spacing size={28} />

        <SignUpFormSection />
      </div>
    </main>
  );
};

const 구분선 = () => {
  return (
    <Flex align="center">
      <Border />
      <Typography
        type="system_16_400"
        color="dark5"
        w={75}
        h={25}
        display="flex"
        style={{
          alignItems: 'center',
          flexShrink: 0,
          justifyContent: 'center',
        }}>
        or
      </Typography>
      <Border />
    </Flex>
  );
};
