import type { Metadata } from 'next';

import { DotorihamCoreProvider } from '../providers/dotoriham-core-provider';

export const metadata: Metadata = {
  description: '흩어진 북마크를 보관하고 공유하고 알림을 받아보세요',
  title: '도토리함 | 기억하고 공유하는 북마크 보관함',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: cookie로 color scheme을 가져오는 것을 구현해야 함
  return (
    <html lang="en" data-dotoriham-color-scheme="light">
      <body suppressHydrationWarning={true}>
        <DotorihamCoreProvider>{children}</DotorihamCoreProvider>
      </body>
    </html>
  );
}
