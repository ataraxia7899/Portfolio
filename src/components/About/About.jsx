import { portfolioData } from '../../data';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import '../../styles/ScrollAnimation.css';
import './About.css';

// About 섹션 컴포넌트
// 자기소개 및 기본 정보 표시
export default function About() {
  const { profile } = portfolioData;
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>소개</span>
        </h2>
        <div 
          ref={ref} 
          className={`about-content scroll-animate ${isVisible ? 'animate-in' : ''}`}
        >
          <div className="about-text">
            <h3>저를 소개합니다</h3>
            <p>
              저는 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는 개발자입니다. <br />
              새로운 기술을 학습하고 적용하는 것에 열정을 가지고 있으며, 
              깔끔한 코드와 효율적인 아키텍처를 추구합니다.
            </p>
            <p>
              항상 더 나은 사용자 경험을 제공하기 위해 고민하고, 
              팀원들과 함께 성장하며 문제를 해결해 나가는 과정을 즐깁니다.
            </p>
          </div>
          <div className="about-info">
            <div className="about-info-item">
              <div className="about-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="about-info-content">
                <span className="about-info-label">이름</span>
                <span className="about-info-value">{profile.name}</span>
              </div>
            </div>
            <div className="about-info-item">
              <div className="about-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="about-info-content">
                <span className="about-info-label">이메일</span>
                <span className="about-info-value">{profile.email}</span>
              </div>
            </div>
            <div className="about-info-item">
              <div className="about-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="about-info-content">
                <span className="about-info-label">직무</span>
                <span className="about-info-value">{profile.title}</span>
              </div>
            </div>
            <div className="about-info-item">
              <div className="about-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="about-info-content">
                <span className="about-info-label">위치</span>
                <span className="about-info-value">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

