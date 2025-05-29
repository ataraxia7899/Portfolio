import '../App.css';
import './Project.css';
import ScrollCard from './ScrollCard/ScrollCard';
import './ScrollCard/ScrollCard.css';
import projects_png from '../assets/image/projects.png';
import { useState, useEffect, useMemo } from 'react';

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [projectsData, setProjectsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// 애니메이션 설정 추가
	const animationConfig = useMemo(
		() => ({
			animationType: 'fadeUp',
			animationDuration: 0.8,
			ease: 'power1.out',
			scrollStart: 'top bottom-=80px',
			scrollEnd: 'bottom top+=80px',
		}),
		[]
	);

	// 데이터 가져오기 함수
	const fetchProjectsData = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:8080/project');

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setProjectsData(data);
		} catch (err) {
			setError(err.message);
			console.error('Projects 데이터 로딩 실패:', err);
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트 마운트 시 데이터 로드
	useEffect(() => {
		fetchProjectsData();
	}, []);

	// 스킬 배열 파싱 함수
	const parseSkills = (skills) => {
		if (typeof skills === 'string') {
			try {
				return JSON.parse(skills);
			} catch {
				return skills.split(',').map((skill) => skill.trim());
			}
		}
		return Array.isArray(skills) ? skills : [];
	};

	// HTML 태그를 처리하는 함수
	const formatDetailText = (text) => {
		if (!text) return '';
		return text
			.replace(/<br\/>/g, '\n')
			.replace(/<strong>/g, '')
			.replace(/<\/strong>/g, '');
	};

	const handleClick = (index) => {
		setSelectedProject(projectsData[index]);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	// 로딩 상태 처리
	if (loading) {
		return (
			<div className="projects-container">
				<p className="projects-header">
					<img
						src={projects_png}
						alt="handup_human"
						className="projects-icon"
					/>{' '}
					<b>Projects</b>
					<hr className="projects-divider" />
				</p>
				<div className="loading-text">Projects 데이터 로딩 중...</div>
			</div>
		);
	}

	// 에러 상태 처리
	if (error) {
		return (
			<div className="projects-container">
				<p className="projects-header">
					<img
						src={projects_png}
						alt="handup_human"
						className="projects-icon"
					/>{' '}
					<b>Projects</b>
					<hr className="projects-divider" />
				</p>
				<div className="error-text">
					Projects 데이터를 불러오는데 실패했습니다: {error}
				</div>
				<button className="retry-button" onClick={fetchProjectsData}>
					다시 시도
				</button>
			</div>
		);
	}

	return (
		<div className="projects-container">
			<p className="projects-header">
				<img src={projects_png} alt="handup_human" className="projects-icon" />{' '}
				<b>Projects</b>
				<hr className="projects-divider" />
			</p>

			<div>
				{projectsData.map((item, index) => (
					<ScrollCard
						key={item.id}
						{...animationConfig}
						delay={index * 0.08}
						className="projects-card-wrapper"
					>
						<div
							key={item.id}
							className="project-card"
							onClick={() => handleClick(index)}
						>
							<div className="project-name">{item.name}</div>
							<div className="project-date">
								{item.date && item.date !== 'undefined'
									? item.date
									: '날짜 미정'}
							</div>
							<div className="project-skills">
								{parseSkills(item.skills).map((skill, skillIndex) => (
									<span key={skillIndex} className="skill-tag">
										{skill}
									</span>
								))}
							</div>
							<div className="project-explain">{item.explanation}</div>
						</div>
					</ScrollCard>
				))}
			</div>

			{/* 모달 */}
			<div
				className={`modal-overlay ${selectedProject ? 'modal-active' : ''}`}
				onClick={closeModal}
			>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<button className="modal-close-button" onClick={closeModal}>
						×
					</button>

					{selectedProject && (
						<>
							<h2 className="modal-title">{selectedProject.name}</h2>
							<p className="modal-date">
								{selectedProject.date && selectedProject.date !== 'undefined'
									? selectedProject.date
									: '날짜 정보 없음'}
							</p>

							<div className="modal-section">
								<strong>사용 기술:</strong>
								<div className="modal-skills">
									{parseSkills(selectedProject.skills).map((skill, index) => (
										<span key={index} className="modal-skill-tag">
											{skill}
										</span>
									))}
								</div>
							</div>

							<div className="modal-section">
								<strong>프로젝트 설명:</strong>
								<p className="modal-description">
									{selectedProject.explanation}
								</p>
							</div>

							<div className="modal-section">
								<strong>상세 설명:</strong>
								<div className="modal-detail">
									{formatDetailText(selectedProject.detail_explanation)}
								</div>
							</div>

							{selectedProject.url && (
								<div className="modal-link-section">
									<a
										href={selectedProject.url}
										target="_blank"
										rel="noopener noreferrer"
										className="github-link"
									>
										GitHub 저장소 방문
									</a>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
