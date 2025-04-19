import '../App.css';
import projects_png from '../assets/image/projects.png';
import Project_Data from './Projects_Data/Projects_DB';

export default function Projects() {
	return (
		<div style={{ marginTop: '35px' }}>
			<p style={{ fontSize: '1.1rem' }}>
				<img
					src={projects_png}
					alt="handup_human"
					style={{ width: '20px', height: '20px' }}
				/>{' '}
				<b>Projects</b>
				<hr style={{ width: '100%', margin: '10px 0' }} />
			</p>
			<Project_Data />
		</div>
	);
}

/*
### 데이터 흐름 설명

1. `Projects.jsx`: 최상위 컴포넌트로 Projects_Data 컴포넌트를 렌더링

2. `Projects_Data/Projects_Data.jsx`:
   - 프로젝트 데이터 배열(Card_data) 관리
   - Card_data를 Project_Card 컴포넌트에 props로 전달

3. `Project_Card.jsx`:
   - Card_data props를 받아 각 프로젝트 카드 UI 렌더링
   - map 함수를 사용하여 데이터 배열의 각 항목을 카드 형태로 표시
*/
