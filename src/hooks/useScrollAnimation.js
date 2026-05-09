import { useRef, useEffect, useState } from 'react';

// 스크롤 애니메이션 훅
// 요소가 뷰포트에 들어올 때 애니메이션 트리거
// @param {Object} options - IntersectionObserver 옵션
// @returns {Object} ref와 isVisible 상태를 반환
export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const threshold = options.threshold || 0.15;
  const rootMargin = options.rootMargin || '50px 0px';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 보이면 더 이상 관찰하지 않음
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

