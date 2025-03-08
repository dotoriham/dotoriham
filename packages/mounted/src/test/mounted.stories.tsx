import { StoryObj } from '@storybook/react';

import {
  Client,
  SuspenseQueryProvider,
  useSuspenseQuery,
} from './promise-client';
import { Mounted } from '../components/mounted';

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

export const Transition: Story = {
  render: () => {
    return (
      <>
        <Mounted transition={{ delay: 500 }} key="slide-up">
          <div
            style={{
              backgroundColor: 'lightgray',
              height: '500px',
              marginBottom: '20px',
              width: '500px',
            }}>
            Slide Up
          </div>
        </Mounted>

        <div style={{ height: '700px' }} />

        <Mounted transition={{ delay: 500 }} key="fade-in">
          <div
            style={{
              backgroundColor: 'lightgray',
              height: '500px',
              marginBottom: '20px',
              width: '500px',
            }}>
            Fade In
          </div>
        </Mounted>
      </>
    );
  },
};

export const LazyTransition: Story = {
  render: () => {
    return (
      <>
        {[...Array(20)].map((_, i) => (
          <Mounted
            lazy={
              isLazy(i) ? { freezeOnceVisible: true, threshold: 1 } : undefined
            }
            transition={isLazy(i) ? { delay: 0 } : undefined}
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
