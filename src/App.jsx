// import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Basic_explanation from './components/Basic_explanation';
import AboutMe from './components/AboutMe';
import Skills_and_Tool from './components/Skills_And_Tools';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Educations from './components/Educations';
import ScrollIndicator from './components/ScrollIndicator';
import Footer from './components/Footer';

export default function App() {
	// const [openList, setOpenList] = useState(false);

	const Avoid_Cover_Style = {
		position: 'absolute',
		top: '215px',
		width: '100%', // 너비 추가
		padding: '0 10px', // 모바일 여백 추가
		minWidth: '320px', // 최소 너비
	};

	const desktopContentStyle = {
		width: '80%',
		maxWidth: '1200px',
		background: '#333333',
		position: 'relative',
		top: '10px',
		padding: '0 40px 25px',
		margin: '0 auto',
		boxSizing: 'border-box',
		overflowX: 'hidden',
	};

	const mobileContentStyle = {
		width: '100%',
		maxWidth: 'none',
		background: '#333333',
		position: 'relative',
		top: '10px',
		left: '65px',
		minHeight: '100vh',
		padding: '0 40px 25px',
		boxSizing: 'border-box',
		overflowX: 'hidden',
	};

	const contentStyle =
		window.innerWidth <= 768 ? mobileContentStyle : desktopContentStyle;

	return (
		<>
			<ScrollIndicator />
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
					<Footer />
				</div>
			</div>
		</>
	);
}
