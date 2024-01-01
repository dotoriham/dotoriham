import type { Metadata } from 'next';
import { DeviceDetectProvider } from '@dotoriham/device-detect';
import { Inter } from 'next/font/google';
import { getUserAgent } from '@/utils/getUserAgent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ua = getUserAgent();
  const isMobile = ua.device?.type === 'mobile';

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <DeviceDetectProvider ssrIsMobile={isMobile}>
          {children}
        </DeviceDetectProvider>
      </body>
    </html>
  );
}
