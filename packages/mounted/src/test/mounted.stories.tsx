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
