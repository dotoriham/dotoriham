'use client';

import { BaseDesktopLayout } from '../../components/layout/base-desktop-layout';
import { Sidebar } from '../../components/sidebar/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BaseDesktopLayout header={true} footer={true}>
      <div
        style={{
          display: 'flex',
        }}>
        <Sidebar />
        <div
          style={{
            backgroundColor: 'lightyellow',
            flex: '1 0 auto',
          }}>
          {children}
        </div>
      </div>
    </BaseDesktopLayout>
  );
}
