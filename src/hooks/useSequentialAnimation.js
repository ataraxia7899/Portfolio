import { useRef, useEffect, useCallback } from 'react';

// 순차적 스크롤 애니메이션 훅
// 여러 자식 요소들이 뷰포트에 들어올 때 순차적으로 애니메이션 트리거
// @param {string} childSelector - 애니메이션 적용할 자식 요소의 CSS 선택자
// @param {Object} options - IntersectionObserver 옵션 및 애니메이션 설정
// @returns {Object} 컨테이너 ref
export default function useSequentialAnimation(childSelector, options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '50px 0px',
    };

    const delayIncrement = options.delayIncrement || 100;
    const animationClass = options.animationClass || 'animate-in';
    
    // 이미 애니메이션된 요소 추적 (중복 방지)
    const animatedElements = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 중복 트리거 방지
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          animatedElements.add(entry.target);
          const index = parseInt(entry.target.dataset.animationIndex || '0', 10);
          
          // requestAnimationFrame으로 브라우저 렌더링 최적화
          requestAnimationFrame(() => {
            setTimeout(() => {
              entry.target.classList.add(animationClass);
            }, index * delayIncrement);
          });
          
          // 한 번 애니메이션 후 관찰 중지
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = container.querySelectorAll(childSelector);
    elements.forEach((el, index) => {
      el.dataset.animationIndex = index;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [childSelector, options.threshold, options.rootMargin, options.delayIncrement, options.animationClass]);

  return { containerRef };
}
