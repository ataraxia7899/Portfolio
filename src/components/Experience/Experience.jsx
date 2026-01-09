import { useRef, useEffect } from 'react';
import { portfolioData } from '../../data';
import '../../styles/ScrollAnimation.css';
import './Experience.css';

// Experience 섹션 컴포넌트
// 타임라인 형태로 경력 및 학력 표시
export default function Experience() {
  const { experience } = portfolioData;
  const timelineRef = useRef(null);

  // 스크롤 시 각 타임라인 아이템 순차 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>경험 & 교육</span>
        </h2>
        <div className="experience-timeline" ref={timelineRef}>
          {experience.map((item) => (
            <div key={item.id} className="timeline-item scroll-animate">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className={`timeline-type ${item.type}`}>
                  {item.type === 'work' ? '경력' : 
                   item.type === 'education' ? '학력' : '교육'}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-period">{item.period}</p>
                <p className="timeline-description">{item.description}</p>
                {item.details && item.details.length > 0 && (
                  <ul className="timeline-details">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

