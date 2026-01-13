import { portfolioData } from '../../data';
import useSequentialAnimation from '../../hooks/useSequentialAnimation';
import '../../styles/ScrollAnimation.css';
import './Experience.css';

// Experience 섹션 컴포넌트
// 타임라인 형태로 경력 및 학력 표시
export default function Experience() {
  const { experience } = portfolioData;
  
  // 순차적 애니메이션 훅 사용
  const { containerRef } = useSequentialAnimation('.timeline-item', {
    threshold: 0.1,
    delayIncrement: 150,
    animationClass: 'animate-in',
  });

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>경험 &amp; 교육</span>
        </h2>
        <div className="experience-timeline" ref={containerRef}>
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
