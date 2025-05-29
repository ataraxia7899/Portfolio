import { useState, useMemo } from 'react';
import './Projects_Data/Projects_Data';
import ScrollCard from './ScrollCard/ScrollCard';
import './ScrollCard/ScrollCard.css';

export default function Project_Card(props) {
	const [selectedProject, setSelectedProject] = useState(null);

	const nameStyle = { fontSize: '20px', fontWeight: 'bold' };
	const dateStyle = {
		fontSize: '12px',
		fontWeight: 'bold',
		color: '#989898',
	};
	const skillsStyle = { fontSize: '12px', backgroundColor: '#7b415d' };
	const explainStyle = { fontSize: '13px' };

	// 모달 스타일
	const modalStyle = {
		display: selectedProject !== null ? 'flex' : 'none',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1000,
		backdropFilter: 'blur(5px)',
	};

	const modalContentStyle = {
		backgroundColor: '#2a2a2a',
		padding: '40px', // 패딩 증가
		borderRadius: '15px',
		width: '90%', // 너비 증가
		maxWidth: '800px', // 최대 너비 증가
		maxHeight: '90vh', // 최대 높이 증가
		overflow: 'auto',
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
		border: '1px solid #444',
		animation: 'modalFade 0.3s ease-in-out',
		'@keyframes modalFade': {
			from: { opacity: 0, transform: 'translateY(-20px)' },
			to: { opacity: 1, transform: 'translateY(0)' },
		},
		color: '#fff',
	};

	const handleClick = (index) => {
		setSelectedProject(props.Card_data[index]);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	// 전용 마크다운 라이브러리 사용용
	const createMarkup = (htmlContent) => {
		return { __html: htmlContent };
	};

	// 카드별 애니메이션 설정 - 더 자연스럽고 일반적인 패턴
	const cardAnimationConfigs = useMemo(
		() => [
			{ type: 'fadeUp', delay: 0 },
			{ type: 'fadeUp', delay: 0.1 },
			{ type: 'fadeUp', delay: 0.2 },
			{ type: 'fadeUp', delay: 0.3 },
			{ type: 'fadeUp', delay: 0.4 },
			{ type: 'fadeUp', delay: 0.5 },
		],
		[]
	);

	return (
		<>
			<div className="explanation_Card">
				{props.Card_data.map((item, index) => (
					<ScrollCard
						key={index}
						animationType={
							cardAnimationConfigs[index % cardAnimationConfigs.length].type
						}
						animationDuration={1.2}
						ease="power2.out"
						scrollStart="top bottom-=50px"
						scrollEnd="bottom top+=50px"
						delay={
							cardAnimationConfigs[index % cardAnimationConfigs.length].delay
						}
						className="project-card-wrapper"
					>
						<div
							key={index}
							className="explanation"
							onClick={() => handleClick(index)}
						>
							<text style={nameStyle}>{item.name || '-내용없음-'}</text>
							<br />
							<text style={dateStyle}>{item.date || '-내용없음-'}</text>
							<br />
							{/* ↓ 사용 스킬 하나씩 출력되도록 하는 로직 ↓ */}
							{Array.isArray(item.skills) ? (
								<div
									style={{
										display: 'flex',
										gap: '5px',
										marginBottom: '5px',
										overflow: 'hidden',
									}}
								>
									{item.skills.map((skill, skillIndex) => (
										<span
											key={skillIndex}
											style={{
												...skillsStyle,
												padding: '2px 5px',
												borderRadius: '4px',
												color: 'white',
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
											}}
										>
											{skill}
										</span>
									))}
								</div>
							) : (
								item.skills && (
									<>
										<text
											style={{
												...skillsStyle,
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'nowrap',
											}}
										>
											{item.skills}
										</text>
										<br />
									</>
								)
							)}
							<text
								style={{
									...explainStyle,
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									display: 'block',
								}}
							>
								{item.explain || '-내용없음-'}
							</text>
							<br />
							<a
								href={item.url || ''}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									fontSize: '11px',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									display: 'block',
								}}
								onClick={(e) => e.stopPropagation()}
							>
								{item.url || '-내용없음-'}
							</a>
						</div>
					</ScrollCard>
				))}
			</div>

			{/* 모달 팝업 */}
			<div style={modalStyle} onClick={closeModal}>
				<div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
					<h2>{selectedProject?.name}</h2>
					<p style={{ color: '#989898' }}>{selectedProject?.date}</p>
					<div
						dangerouslySetInnerHTML={createMarkup(
							selectedProject?.detail_explain || selectedProject?.explain
						)}
						style={{ margin: '20px 0' }}
					/>
					<a
						href={selectedProject?.url}
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: '#4a9eff' }}
					>
						GitHub 저장소 방문
					</a>
				</div>
			</div>
		</>
	);
}
