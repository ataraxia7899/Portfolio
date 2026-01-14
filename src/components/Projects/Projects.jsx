import { useState, useMemo, useEffect } from 'react';
import { portfolioData } from '../../data';
import { ITEMS_PER_PAGE, ITEMS_PER_PAGE_LIST, getHeaderHeight } from '../../constants';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';
import ProjectModal from './ProjectModal';
import './Projects.css';

// Projects 섹션 컴포넌트
// 프로젝트 그리드, 페이지네이션, 보기 모드 전환 기능 포함
export default function Projects() {
  const { projects } = portfolioData;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  // 'card': 카드형, 'list': 리스트형 (localStorage에서 저장된 값 불러오기)
  const [viewMode, setViewMode] = useState(() => {
    const saved = localStorage.getItem('projectViewMode');
    return saved === 'list' ? 'list' : 'card';
  });

  // 보기 모드에 따른 페이지당 항목 수
  const itemsPerPage = viewMode === 'list' ? ITEMS_PER_PAGE_LIST : ITEMS_PER_PAGE;

  // 날짜 기준 정렬 (최신순 고정)
  const sortedProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => {
      // 날짜 문자열에서 시작 연월 추출 (예: "2025.01 - 2025.03" -> "2025.01")
      const dateA = a.date.split(' - ')[0];
      const dateB = b.date.split(' - ')[0];
      return dateB.localeCompare(dateA); // 최신순
    });
    return sorted;
  }, [projects]);

  // 현재 페이지 프로젝트
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProjects, currentPage, itemsPerPage]);

  // 전체 페이지 수
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

  // 보기 모드 변경 시 첫 페이지로 + localStorage 저장
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setCurrentPage(1);
    localStorage.setItem('projectViewMode', mode);
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

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
    
    // 모바일 또는 리스트형일 때 프로젝트 섹션 상단으로 스크롤
    if (window.innerWidth <= 768 || viewMode === 'list') {
      // 상태 업데이트 후 스크롤 애니메이션 실행
      requestAnimationFrame(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const headerHeight = getHeaderHeight();
          const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            <span>프로젝트</span>
          </h2>
          
          {/* 컨트롤 영역 */}
          <div className="projects-controls">
            {/* 보기 모드 전환 */}
            <div className="view-mode-controls">
              <button
                className={`view-mode-btn ${viewMode === 'card' ? 'active' : ''}`}
                onClick={() => handleViewModeChange('card')}
                aria-label="카드형 보기"
                title="카드형 보기"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
              <button
                className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => handleViewModeChange('list')}
                aria-label="리스트형 보기"
                title="리스트형 보기"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <circle cx="4" cy="6" r="1" fill="currentColor" />
                  <circle cx="4" cy="12" r="1" fill="currentColor" />
                  <circle cx="4" cy="18" r="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 카드형 보기 */}
        {viewMode === 'card' && (
          <div className="projects-grid-container">
            {/* 이전 페이지 버튼 (데스크톱) */}
            {totalPages > 1 && (
              <button
                className="page-nav-btn page-nav-prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="이전 페이지"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

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

            {/* 다음 페이지 버튼 (데스크톱) */}
            {totalPages > 1 && (
              <button
                className="page-nav-btn page-nav-next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="다음 페이지"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* 리스트형 보기 */}
        {viewMode === 'list' && (
          <div className="projects-list">
            {currentProjects.map((project) => (
              <article 
                key={project.id} 
                className="project-list-item"
                onClick={() => openModal(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${project.title} 프로젝트 상세 보기`}
              >
                <div className="project-list-date">{project.date}</div>
                <div className="project-list-content">
                  <h3 className="project-list-title">{project.title}</h3>
                  <p className="project-list-description">{project.shortDescription}</p>
                </div>
                <div className="project-list-tags">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="project-tag">+{project.techStack.length - 3}</span>
                  )}
                </div>
                <div className="project-list-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
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
