import { useState, useEffect, useRef, useMemo } from 'react';

// 스크롤 위치에 따른 활성 섹션을 감지하는 커스텀 훅
// Intersection Observer API 활용
export default function useSectionObserver(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

  // sectionIds 배열을 안정적인 참조로 변환
  const stableSectionIds = useMemo(() => sectionIds, [sectionIds.join(',')]);
  const rootMargin = options.rootMargin || '-20% 0px -60% 0px';
  const threshold = options.threshold || 0;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // 각 섹션 요소를 관찰
    stableSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [stableSectionIds, rootMargin, threshold]);

  return activeSection;
}
