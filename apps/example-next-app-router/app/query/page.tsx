import { QueryClientProvider } from '@dotoriham/query';

function Page() {
  return (
    <QueryClientProvider client="">
      <Content />
    </QueryClientProvider>
  );
}

export default Page;

const Content = () => {
  return <div>Content</div>;
};
