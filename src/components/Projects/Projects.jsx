import { useState, useMemo, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio-data';
import './Projects.css';

// Projects 섹션 컴포넌트
// 프로젝트 그리드, 페이지네이션, 정렬 기능을 포함합니다.
export function Projects() {
  const { projects } = portfolioData;
  const ITEMS_PER_PAGE = 9;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc': 최신순, 'asc': 오래된순
  const [selectedProject, setSelectedProject] = useState(null);

  // 날짜 기준 정렬
  const sortedProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => {
      // 날짜 문자열에서 시작 연월 추출 (예: "2025.01 - 2025.03" -> "2025.01")
      const dateA = a.date.split(' - ')[0];
      const dateB = b.date.split(' - ')[0];
      
      if (sortOrder === 'desc') {
        return dateB.localeCompare(dateA);
      }
      return dateA.localeCompare(dateB);
    });
    return sorted;
  }, [projects, sortOrder]);

  // 현재 페이지 프로젝트
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProjects, currentPage]);

  // 전체 페이지 수
  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);

  // 정렬 변경 시 첫 페이지로
  const handleSortChange = (order) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  // 모달 열기
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            <span>프로젝트</span>
          </h2>
          
          {/* 정렬 컨트롤 */}
          <div className="projects-controls">
            <button
              className={`sort-btn ${sortOrder === 'desc' ? 'active' : ''}`}
              onClick={() => handleSortChange('desc')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h13M3 8h9M3 12h5M17 10V4M17 10l-3-3M17 10l3-3" />
              </svg>
              최신순
            </button>
            <button
              className={`sort-btn ${sortOrder === 'asc' ? 'active' : ''}`}
              onClick={() => handleSortChange('asc')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h13M3 8h9M3 12h5M17 14v6M17 14l-3 3M17 14l3 3" />
              </svg>
              오래된순
            </button>
          </div>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="projects-grid">
          {currentProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              // 페이지 변경 시 프로젝트 섹션 상단으로 스크롤
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        )}
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </section>
  );
}

// 프로젝트 카드 컴포넌트
function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card" onClick={onClick}>
      <div className="project-card-thumbnail">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>
      <div className="project-card-content">
        <span className="project-card-date">{project.date}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.shortDescription}</p>
        <div className="project-card-tags">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="project-tag">{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="project-tag">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
    </article>
  );
}

// 페이지네이션 컴포넌트
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination" aria-label="프로젝트 페이지네이션">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-label={`${page} 페이지`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
}

// 프로젝트 상세 모달 컴포넌트
function ProjectModal({ project, isOpen, onClose }) {
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
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
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
                  {project.details.images.map((img, index) => (
                    <div key={index} className="modal-gallery-item">
                      <img src={img} alt={`${project.title} 스크린샷 ${index + 1}`} loading="lazy" />
                    </div>
                  ))}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
