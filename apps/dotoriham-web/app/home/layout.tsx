import { BaseDesktopLayout } from '../../components/layout/base-desktop-layout';
import { Sidebar } from '../../components/sidebar/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BaseDesktopLayout>
      <header
        style={{
          backgroundColor: 'lightblue',
          height: '48px',
          padding: '10px',
        }}>
        헤더영역
      </header>

      <main
        style={{
          minHeight: 'calc(100vh - 48px - 56px)',
        }}>
        <div
          style={{
            display: 'flex',
            height: 'calc(100vh - 48px - 56px)',
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
      </main>

      <footer
        style={{
          backgroundColor: 'lightgreen',
          height: '56px',
          padding: '10px',
        }}>
        푸터영역
      </footer>
    </BaseDesktopLayout>
  );
}
