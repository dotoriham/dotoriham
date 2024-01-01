import { PropsWithChildren } from 'react';

function SignInLayout({ children }: PropsWithChildren) {
  return (
    <div>
      Layout
      {children}
    </div>
  );
}

export default SignInLayout;
