'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      style={{
        height: '50px',
        border: '1px solid #37b24d',
        borderRadius: '4px',
        margin: '10px',
        padding: '0 20px',
        cursor: 'pointer',
        background: '#37b24d',
        color: 'white',
        fontSize: '20px',
      }}
      {...rest}>
      {children}
    </button>
  );
};

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>테스트 페이지</h1>

      <Button onClick={() => router.push('/use-overlay')}>use-overlay</Button>
      <Button onClick={() => router.push('/virtual-scroll')}>
        virtual-scroll
      </Button>
    </main>
  );
}
