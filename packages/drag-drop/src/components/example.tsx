import React, { useState, useRef } from 'react';

interface DraggingItemContext {
  fullHeight: number;
  x: number;
  y: number;
  index: number;
}

export const Example = () => {
  const [items, setItems] = useState([
    '🍎 Apple',
    '🍌 Banana',
    '🍇 Grape',
    '🍒 Cherry',
  ]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const dragItemRef = useRef<HTMLDivElement | null>(null);

  const draggingItemContext = useRef<DraggingItemContext | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // 마우스 클릭 (드래그 시작)
  const handleMouseDown = (index: number, event: React.MouseEvent) => {
    setIsDragging(true);
    const element = event.currentTarget as HTMLDivElement;

    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    const style = window.getComputedStyle(element);
    const marginTop = parseFloat(style.marginTop);

    const elementFullHeight = elementHeight + marginTop;

    dragItemRef.current = element;

    draggingItemContext.current = {
      fullHeight: elementFullHeight,
      index,
      x: event.clientX,
      y: event.clientY,
    };

    element.style.position = 'fixed';
    element.style.zIndex = '1000';
    element.style.width = `${elementWidth}px`;
    element.style.height = `${elementHeight}px`;
  };

  // 마우스 이동 (드래그 중)
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!dragItemRef.current || draggingItemContext.current == null) {
      return;
    }

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // `transform`을 사용해서 부드럽게 이동
    dragItemRef.current.style.transform = `translate(${
      mouseX - draggingItemContext.current.x
    }px, ${mouseY - draggingItemContext.current.y}px)`;
    dragItemRef.current.style.transition = 'none'; // 이동 시 자연스럽게

    const 현재위치Y = mouseY - draggingItemContext.current.y;
    console.log({ 현재위치Y });

    // 드래그 중인 요소와 다른 요소 비교
    const hoverItem = document.elementFromPoint(mouseX, mouseY);
    if (hoverItem && hoverItem.parentElement) {
      const hoverList = Array.from(hoverItem.parentElement.children);
      const hoverIndex = hoverList.indexOf(hoverItem);

      if (
        hoverIndex !== -1 &&
        hoverIndex !== draggingItemContext.current.index
      ) {
        setHoverIndex(hoverIndex);
      }
    }
  };

  const resetStyle = (element: HTMLDivElement) => {
    element.style.position = 'relative';
  };

  const resetDraggingItemContext = () => {
    draggingItemContext.current = null;
  };

  // 마우스 놓기 (드래그 종료)
  const handleMouseUp = () => {
    setIsDragging(false);
    if (draggingItemContext.current == null) {
      return;
    }

    if (
      hoverIndex !== null &&
      draggingItemContext.current.index !== hoverIndex
    ) {
      const newItems = [...items];
      const [draggedItem] = newItems.splice(
        draggingItemContext.current.index,
        1,
      );
      newItems.splice(hoverIndex, 0, draggedItem);
      setItems(newItems);
    }

    if (dragItemRef.current) {
      resetStyle(dragItemRef.current);
      resetDraggingItemContext();
      dragItemRef.current.style.transform = 'translate(0, 0)'; // 원래 자리로 복귀
      // dragItemRef.current.style.transition = 'transform 0.2s ease'; // 부드럽게 원래 자리로 돌아가기
      dragItemRef.current.style.zIndex = '1'; // 기본 상태로 복구
    }

    setHoverIndex(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ padding: '20px' }}>
      {items.map((item, index) => (
        <div
          key={index}
          onMouseDown={(e) => handleMouseDown(index, e)}
          style={{
            backgroundColor:
              draggingItemContext.current?.index === index
                ? 'lightblue'
                : 'white',
            border: '1px solid #ccc',
            cursor: 'grab',
            margin: '5px 0',
            padding: '10px',
            position: 'relative',
            transform:
              index > (draggingItemContext.current?.index ?? 0) && isDragging
                ? `translateY(${draggingItemContext.current?.fullHeight}px)`
                : 'none',
            // transform:
            //   hoverIndex === index
            //     ? `translateY(${draggingIndex! > index ? '10px' : '-10px'})`
            //     : 'none',
            // transition: 'transform 0.2s ease',
            userSelect: 'none',
            willChange: 'transform',
          }}>
          {item}
        </div>
      ))}
    </div>
  );
};
