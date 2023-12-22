'use client';
import { VirtualScroll } from '@dotoriham/virtual-scroll';
const mockList = Array.from({ length: 10000 }).map((_, index) => index);

function Page() {
  return (
    <div
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 20px',
        border: '1px solid black',
      }}>
      <VirtualScroll
        data={mockList}
        columns={2}
        itemHeight={300}
        renderAhead={10}
        renderItem={(item) => <Item />}
      />
    </div>
  );
}

const Item = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '400px',
        border: '1px solid black',
        marginBottom: '10px',
        listStyle: 'none',
      }}>
      mockItem
    </div>
  );
};

export default Page;
