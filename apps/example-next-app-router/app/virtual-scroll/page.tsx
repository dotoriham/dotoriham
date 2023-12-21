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
      <ul>
        {mockList.map((item) => {
          return <Item key={item} />;
        })}
      </ul>
    </div>
  );
}

const Item = () => {
  return (
    <li
      style={{
        width: '300px',
        height: '400px',
        border: '1px solid black',
        marginBottom: '10px',
        listStyle: 'none',
      }}>
      mockItem
    </li>
  );
};

export default Page;
