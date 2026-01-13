import { useState, useEffect, useMemo } from 'react';
import { portfolioData } from '../../data';
import { TYPING_SPEED, DELETE_SPEED, PAUSE_TIME } from '../../constants';
import './Home.css';

// Home 섹션 컴포넌트
// 타이핑 효과가 있는 메인 인트로 섹션입니다.
export default function Home() {
  const { profile } = portfolioData;
  
  // useMemo로 메모이제이션하여 불필요한 재생성 방지
  const typingTexts = useMemo(() => [
    profile.title, 
    profile.subtitle, 
    "문제 해결을 즐기는 개발자"
  ], [profile.title, profile.subtitle]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 타이핑 효과
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? DELETE_SPEED : TYPING_SPEED;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // 타이핑 중
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // 타이핑 완료, 잠시 대기 후 삭제 시작
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
      } else {
        // 삭제 중
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // 삭제 완료, 다음 텍스트로
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, typingTexts]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-greeting">안녕하세요 👋</p>
        <h1 className="home-title">
          저는 <span className="home-title-gradient">{profile.name}</span>입니다
        </h1>
        <p className="home-subtitle">
          {displayText}
          <span className="typing-cursor" />
        </p>
        <p className="home-description">
          {profile.description}
        </p>
        <div className="home-cta">
          <a href="#projects" className="home-btn home-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
            프로젝트 보기
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="home-btn home-btn-secondary">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <button className="scroll-indicator" onClick={handleScrollDown} aria-label="아래로 스크롤">
        <span className="scroll-indicator-icon" />
        <span>Scroll Down</span>
      </button>
    </section>
  );
}

