'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>테스트 페이지</h1>

      <button onClick={() => router.push('/use-overlay')}>use-overlay</button>
    </main>
  );
}
