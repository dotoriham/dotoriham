import { SignUpTitle } from '@/app-modules/sign-up/components/sign-up-title';
import { GoogleAuthButton } from '@/components/google-auth-button/google-auth-button';
import classes from './desktop.module.css';
import { getClassNames } from '@dotoriham/ui';

const cx = getClassNames(classes);

export const DesktopPage = () => {
  return (
    <main className={cx('root')}>
      <SignUpTitle />
      <GoogleAuthButton />
    </main>
  );
};
