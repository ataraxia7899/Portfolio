import './App.css';
import Title from './components/Title';
import Basic_explanation from './components/Basic_explanation';
import AboutMe from './components/AboutMe';
import Skills_and_Tool from './components/Skills_And_Tools';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Educations from './components/Educations';
import ScrollIndicator from './components/ScrollIndicator';

export default function App() {
	return (
		<>
			<ScrollIndicator />
			<div className="avoid-cover">
				{/* 맨위에 커버를 설치해서 겹치지 않도록 위치 조절 */}
				<div className="content">
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