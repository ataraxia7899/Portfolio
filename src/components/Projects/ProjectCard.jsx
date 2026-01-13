// 프로젝트 카드 컴포넌트
// 프로젝트 정보를 카드 형태로 표시
export default function ProjectCard({ project, onClick }) {
  // 키보드 접근성: Enter 키로 클릭 트리거
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article 
      className="project-card" 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} 프로젝트 상세 보기`}
    >
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
