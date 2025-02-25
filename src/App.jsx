// import { useState } from 'react';
import './App.css';
import Cover from './components/Cover';
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
	};

	return (
		<>
			<Cover />
			<div style={Avoid_Cover_Style}>
				{/* 맨위에 커버를 설치해서 겹치지 않도록 위치 조절 */}
				<Title />
				<Basic_explanation />
				<AboutMe />
				<Skills_and_Tool />
				<Awards />
				<Projects />
				<Educations />
			</div>
		</>
	);
}
