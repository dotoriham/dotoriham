import { Sidebar } from '../../components/@shared/sidebar/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        style={{
          backgroundColor: 'lightblue',
          height: '48px',
          margin: '0 auto',
          padding: '10px',
          width: '1440px',
        }}>
        헤더영역
      </header>

      <main
        style={{
          margin: '0 auto',
          minHeight: 'calc(100vh - 48px - 56px)',
          width: '1440px',
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
          margin: '0 auto',
          padding: '10px',
          width: '1440px',
        }}>
        푸터영역
      </footer>
    </>
  );
}
