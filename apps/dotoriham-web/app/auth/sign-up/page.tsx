import {
  Border,
  Flex,
  Spacing,
  Typography,
  getClassNames,
} from '@dotoriham/ui';

import classes from './sign-up.module.css';
import { GoogleAuthButton } from '../../../features/@shared/google-auth-button';
import { SignUpForm } from './components/sign-up-form';
import { SignUpTitle } from './components/sign-up-title';

const cx = getClassNames(classes);
function Page() {
  return (
    <main>
      <SignUpTitle />
      <div className={cx('inner')}>
        <Spacing size={30} />
        <GoogleAuthButton />

        <Spacing size={28} />
        <구분선 />
        <Spacing size={28} />

        <SignUpForm />
      </div>
    </main>
  );
}

export default Page;

const 구분선 = () => {
  return (
    <Flex align="center">
      <Border />
      <Typography
        type="system_16_400"
        color="black"
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
