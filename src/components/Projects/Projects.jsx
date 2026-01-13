import { useState, useMemo, useEffect } from 'react';
import { portfolioData } from '../../data';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';
import ProjectModal from './ProjectModal';
import './Projects.css';

// CSS 변수에서 헤더 높이 가져오기
const getHeaderHeight = () => {
  const rootStyle = getComputedStyle(document.documentElement);
  const headerHeight = rootStyle.getPropertyValue('--header-height').trim();
  return parseInt(headerHeight, 10) || 72;
};

// Projects 섹션 컴포넌트
// 프로젝트 그리드, 페이지네이션, 정렬 기능 포함
export default function Projects() {
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

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // 페이지 변경 시 프로젝트 섹션 상단으로 스크롤
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const headerHeight = getHeaderHeight();
        const top = projectsSection.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

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
