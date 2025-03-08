import { StoryObj } from '@storybook/react';

import {
  Client,
  SuspenseQueryProvider,
  useSuspenseQuery,
} from './promise-client';
import { Mounted } from '../mounted';

export default {
  title: 'Mounted',
};

type Story = StoryObj<typeof Mounted>;

async function fetchMockUserWithDelay() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { name: 'Dotoriham' };
}

function UserNameWithSuspense() {
  const user = useSuspenseQuery({
    promiseFn: fetchMockUserWithDelay,
    promiseKey: 'key',
  });
  console.log('user', user);
  return <div>{user.name}</div>;
}

const promiseClient = new Client();
export const Suspense: Story = {
  render: () => {
    return (
      <SuspenseQueryProvider client={promiseClient}>
        <Mounted suspense={true} fallback={<div>Loading...</div>}>
          <UserNameWithSuspense />
        </Mounted>
      </SuspenseQueryProvider>
    );
  },
};

export const Lazy: Story = {
  render: () => {
    return (
      <>
        {[...Array(20)].map((_, i) => (
          <Mounted
            lazy={
              isLazy(i) ? { freezeOnceVisible: true, threshold: 1 } : undefined
            }
            key={i}>
            <div
              style={{
                backgroundColor: 'lightgray',
                height: '500px',
                marginBottom: '20px',
                width: '500px',
              }}>
              {isLazy(i) ? 'Lazy' : 'Not Lazy'} {i}
            </div>
          </Mounted>
        ))}
      </>
    );
  },
};

const isLazy = (index: number) => index % 3 === 0;
