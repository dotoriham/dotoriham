import {
  Border,
  Flex,
  Spacing,
  Typography,
  getClassNames,
} from '@dotoriham/ui';

import classes from './sign-up.module.css';
import { GoogleAuthButton } from '../../../components/google-auth-button';
import { SignUpFormSection } from '../../../components/sign-up/components/sign-up-form-section';
import { SignUpTitle } from '../../../components/sign-up/components/sign-up-title';

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

        <SignUpFormSection />
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
