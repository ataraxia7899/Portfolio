import { useState, useEffect, useRef } from 'react';

// 스크롤 위치에 따른 활성 섹션을 감지하는 커스텀 훅
// Intersection Observer API 활용
export default function useSectionObserver(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || '-20% 0px -60% 0px',
      threshold: options.threshold || 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // 각 섹션 요소를 관찰
    sectionIds.forEach((id) => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(','), options.rootMargin, options.threshold]);

  return activeSection;
}

