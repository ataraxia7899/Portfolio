import { useEffect, useRef } from 'react';

// 프로젝트 상세 모달 컴포넌트
// 포커스 트랩 및 접근성 기능 포함
export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  // 포커스 트랩 및 관리
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // 모달 열릴 때 현재 포커스된 요소 저장
      previouslyFocusedElement.current = document.activeElement;
      
      // 모달 내 첫 번째 포커스 가능한 요소로 포커스 이동
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    return () => {
      // 모달 닫힐 때 이전에 포커스된 요소로 복원
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [isOpen]);

  // 포커스 트랩 구현
  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''}`} 
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" ref={modalRef}>
        <button className="modal-close" onClick={onClose} aria-label="모달 닫기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-body">
          {/* 헤더 이미지 */}
          <div className="modal-header-image">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} />
            ) : (
              <div className="modal-header-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            )}
          </div>

          {/* 상세 내용 */}
          <div className="modal-details">
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <p className="modal-date">{project.date}</p>
            
            <div className="modal-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="modal-tag">{tech}</span>
              ))}
            </div>

            {/* 개발 배경 */}
            <div className="modal-section">
              <h3 className="modal-section-title">개발 배경</h3>
              <p>{project.details.background}</p>
            </div>

            {/* 주요 기능 */}
            <div className="modal-section">
              <h3 className="modal-section-title">주요 기능</h3>
              <ul>
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* 기술적 도전 */}
            {project.details.challenges && (
              <div className="modal-section">
                <h3 className="modal-section-title">기술적 도전</h3>
                <p>{project.details.challenges}</p>
              </div>
            )}

            {/* 스크린샷 갤러리 */}
            {project.details.images && project.details.images.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">스크린샷</h3>
                <div className="modal-gallery">
                  {project.details.images.map((img, index) => {
                    // 객체 형태 또는 문자열 형태 모두 지원
                    const imgSrc = typeof img === 'string' ? img : img.src;
                    const imgCaption = typeof img === 'object' ? img.caption : null;
                    return (
                      <div key={index} className="modal-gallery-item">
                        {imgCaption && <p className="modal-gallery-caption">{imgCaption}</p>}
                        <div className="modal-gallery-img-container">
                          <img src={imgSrc} alt={`${project.title} 스크린샷 ${index + 1}`} loading="lazy" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 링크 버튼 */}
            <div className="modal-links">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link modal-link-github"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link modal-link-live"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.VideoURL && (
                <a 
                  href={project.VideoURL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link modal-link-video"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  시연영상
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
