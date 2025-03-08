import { useEffect, useRef } from 'react';

interface Props {
  startValue: number;
  endValue: number;
  duration: number;
  easing?: (t: number) => number; // easing 함수 (0에서 1로 진행되는 값을 조정)
  onFrame: (value: number) => void; // 각 프레임마다 호출할 콜백
  onComplete: () => void; // 애니메이션 완료 시 호출할 콜백
}

export const useAnimationFrame = ({
  startValue,
  endValue,
  duration,
  easing = (t) => t,
  onFrame,
  onComplete,
}: Props) => {
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = time;
      }

      const progress = (time - startTimeRef.current) / duration; // 0에서 1로 가는 진행 비율
      const easedProgress = easing(progress); // easing 함수로 진행 비율을 조정

      // 현재 값 계산
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      // 만약 currentValue가 endValue와 매우 가까우면 끝으로 설정
      const isComplete = Math.abs(currentValue - endValue) < 0.001;
      if (isComplete) {
        onFrame(endValue); // 정확히 endValue로 설정
        onComplete();
        cancelAnimationFrame(frameRef.current); // 애니메이션 종료
        return; // 애니메이션 종료 후 더 이상 프레임을 진행하지 않음
      }

      onFrame(currentValue); // 각 프레임마다 호출

      // 애니메이션이 끝나지 않았다면 계속 진행
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        onComplete(); // 애니메이션이 끝났을 때 완료 처리
        cancelAnimationFrame(frameRef.current); // 애니메이션 종료
      }
    };

    frameRef.current = requestAnimationFrame(animate); // 애니메이션 시작

    return () => cancelAnimationFrame(frameRef.current);
  }, [startValue, endValue, duration, easing, onFrame, onComplete]);
};
