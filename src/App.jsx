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
		minWidth: '320px', // 최소 너비
	};

	return (
		<>
			<div style={Avoid_Cover_Style}>
				{/* 맨위에 커버를 설치해서 겹치지 않도록 위치 조절 */}
				<div
					style={{
						width: '90%', // 81%에서 90%로 변경
						maxWidth: '1200px', // 최대 너비
						background: '#333333',
						position: 'relative',
						top: '35px',
						paddingInline: '35px',
						paddingBottom: '25px',
						margin: '0 auto', // 중앙 정렬
					}}
				>
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
