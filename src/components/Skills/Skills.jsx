import { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolio-data';
import './Skills.css';

// Skills 섹션 컴포넌트
// 카테고리별 기술 스택을 태그 그리드로 표시합니다.
export function Skills() {
  const { skills } = portfolioData;
  const sectionRef = useRef(null);

  // 스크롤 시 애니메이션 적용
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 순차적으로 애니메이션 적용 (setTimeout 사용)
            const index = parseInt(entry.target.dataset.index || '0');
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.skill-category');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    { 
      key: 'languages', 
      title: 'Languages', 
      data: skills.languages,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      color: '#f59e0b'
    },
    { 
      key: 'frontend', 
      title: 'Frontend', 
      data: skills.frontend,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      color: '#0d9488'
    },
    { 
      key: 'backend', 
      title: 'Backend', 
      data: skills.backend,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      color: '#10b981'
    },
    { 
      key: 'database', 
      title: 'Database', 
      data: skills.database,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      color: '#6366f1'
    },
    { 
      key: 'tools', 
      title: 'Tools', 
      data: skills.tools,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      color: '#ec4899'
    }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span>기술 스택</span>
        </h2>
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={category.key} className="skill-category" data-index={index} style={{'--category-color': category.color}}>
              <div className="skill-category-header">
                <span className="skill-category-icon" style={{color: category.color}}>
                  {category.icon}
                </span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.data.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="skill-tag"
                    title={`숙련도: ${skill.level}%`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
