// import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Basic_explanation from './components/Basic_explanation';
import AboutMe from './components/AboutMe';
import Skills_and_Tool from './components/Skills_And_Tools';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Educations from './components/Educations';

export default function App() {
	// const [openList, setOpenList] = useState(false);

	const Avoid_Cover_Style = {
		position: 'absolute',
		top: '215px',
		width: '100%', // 너비 추가
		padding: '0 10px', // 모바일 여백 추가
		minWidth: '320px', // 최소 너비
	};

	const contentStyle = {
		width: '80%', // 더 나은 균형감을 위해 조정된 너비
		maxWidth: '1200px',
		background: '#333333',
		position: 'relative',
		top: '10px',
		padding: '0 40px 25px',
		margin: '0 auto', // div를 수평으로 중앙 정렬
		boxSizing: 'border-box', // 너비 계산에 패딩 포함
		overflowX: 'hidden', // 가로 스크롤 방지
		'@media screen and (max-width: 768px)': {
			width: '100%',
			maxWidth: 'none',
			margin: '0',
			padding: '20px',
			position: 'relative',
			top: '-215px', // 커버 높이만큼 위로 이동
			minHeight: '100vh', // 전체 화면 높이
			borderRadius: '25px 25px 0 0', // 상단 모서리만 둥글게
		},
	};

	return (
		<>
			<div style={Avoid_Cover_Style}>
				{/* 맨위에 커버를 설치해서 겹치지 않도록 위치 조절 */}
				<div style={contentStyle}>
					<Title />
					<Basic_explanation />
					<Educations />
					<Skills_and_Tool />
					<Awards />
					<Projects />
					<AboutMe />
				</div>
			</div>
		</>
	);
}
