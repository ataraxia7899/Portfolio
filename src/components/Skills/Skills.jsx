import { useMemo } from 'react';
import { portfolioData } from '../../data';
import useSequentialAnimation from '../../hooks/useSequentialAnimation';
import './Skills.css';

// Skills 섹션 컴포넌트
// 카테고리별 기술 스택을 태그 그리드로 표시
export default function Skills() {
  const { skills } = portfolioData;
  
  // 순차적 애니메이션 훅 사용
  const { containerRef } = useSequentialAnimation('.skill-category', {
    threshold: 0.1,
    delayIncrement: 100,
    animationClass: 'animate-in',
  });

  // useMemo로 카테고리 데이터만 메모이제이션 (JSX 제외)
  const categories = useMemo(() => [
    { 
      key: 'frontend', 
      title: 'Frontend', 
      data: skills.frontend,
      iconType: 'frontend',
      color: '#0d9488'
    },
    { 
      key: 'backend', 
      title: 'Backend', 
      data: skills.backend,
      iconType: 'backend',
      color: '#10b981'
    },
    { 
      key: 'languages', 
      title: 'Languages', 
      data: skills.languages,
      iconType: 'languages',
      color: '#f59e0b'
    },
    { 
      key: 'database', 
      title: 'Database', 
      data: skills.database,
      iconType: 'database',
      color: '#6366f1'
    },
    { 
      key: 'devops', 
      title: 'DevOps', 
      data: skills.devops,
      iconType: 'devops',
      color: '#8b5cf6'
    },
    { 
      key: 'others', 
      title: 'Others', 
      data: skills.others,
      iconType: 'others',
      color: '#ec4899'
    }
  ], [skills]);

  return (
    <section id="skills" className="section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title">
          <span>기술 스택</span>
        </h2>
        <div className="skills-grid">
          {categories.map((category) => (
            <div 
              key={category.key} 
              className="skill-category scroll-animate" 
              style={{'--category-color': category.color}}
            >
              <div className="skill-category-header">
                <span className="skill-category-icon" style={{color: category.color}}>
                  <CategoryIcon type={category.iconType} />
                </span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.data?.map((skill) => (
                  <span key={skill.name} className="skill-tag">
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

// 카테고리 아이콘 컴포넌트
function CategoryIcon({ type }) {
  const icons = {
    frontend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    backend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    languages: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    devops: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    others: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    )
  };

  return icons[type] || null;
}
