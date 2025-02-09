import { useState } from 'react';

export interface ExampleProps {}

export const Example = () => {
  const [droppedItem, setDroppedItem] = useState<string | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: string,
  ) => {
    // 드래그 시작 시 데이터를 설정
    e.dataTransfer.setData('item', item);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    // 드래그 중에는 기본 동작을 방지해야 드롭을 가능하게 만듬
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // 드래그한 데이터를 가져와서 상태를 업데이트
    const item = e.dataTransfer.getData('item');

    // 드롭한 아이템의 text ex) Drop Here1, Drop Here2
    const text = e.currentTarget.textContent;

    setDroppedItem(`${item} - ${text}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Drag and Drop Example</h1>

      <div
        style={{
          backgroundColor: 'lightblue',
          cursor: 'pointer',
          height: '100px',
          lineHeight: '100px',
          marginBottom: '10px',
          textAlign: 'center',
          width: '100px',
        }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'Item 1')}>
        Item 1
      </div>

      <div
        style={{
          backgroundColor: 'lightgray',
          height: '200px',
          lineHeight: '200px',
          textAlign: 'center',
          width: '200px',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        Drop Here1
      </div>

      <div
        style={{
          backgroundColor: 'lightgray',
          height: '200px',
          lineHeight: '200px',
          textAlign: 'center',
          width: '200px',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        Drop Here2
      </div>

      {droppedItem && <p>Dropped Item: {droppedItem}</p>}
    </div>
  );
};
