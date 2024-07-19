'use client';

import { Flex } from '@dotoriham/ui';

import { Sidebar } from '../../features/sidebar/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex h="100vh" w="100%">
      <Sidebar />
      {children}
    </Flex>
  );
}
