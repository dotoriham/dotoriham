import { PropsWithChildren } from 'react';

export const MobilePageLayoutProvider = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
};
