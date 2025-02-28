import '../App.css';
import projects_png from '../assets/image/projects.png';

export default function Projects() {
	const nameStyle = { fontSize: '20px', fontWeight: 'bold' };
	const dateStyle = {
		fontSize: '12px',
		fontWeight: 'bold',
		color: '#989898',
	};
	const explainStyle = { fontSize: '13px' };

	const Card_data = [
		{
			name: '졸업프로젝트',
			date: '2023년 3월 23일',
			explain: '다양한 점을 도전해 본 버스앱 개발',
			url: 'https://github.com/HS-0914/Walkway',
		},
		{
			name: '파이썬 팀프로젝트',
			date: '2023년 6월 9일',
			explain: '1학년 전공과목에서 진행되었던 팀프로젝트',
			url: 'https://github.com/ataraxia7899/python111',
		},
		{
			name: '기초적인 Todo 프로젝트',
			date: '2024년 10월 25일',
			explain: 'Youtube를 보고 코드를 따라해본.. 코드',
			url: 'https://github.com/ataraxia7899/todo_project',
		},
		{
			name: 'React 기초 작업들 사용해보기',
			date: '2024년 10월 19일',
			explain:
				'React를 처음 공부를 시작하면서 Youtube를 보고 따라한 코드입니다.',
			url: 'https://github.com/ataraxia7899/newbie',
		},
		{
			name: '현재 공부중인 React 코드들',
			explain: '한 프로젝트안에 여러 브랜치로 파일을 구분해놨습니다.',
			url: 'https://github.com/ataraxia7899/React___Udemy_study',
		},
		{
			name: '현재 공부중인 React Native 코드들',
			explain: '한 프로젝트안에 여러 브랜치로 파일을 구분해놨습니다.',
			url: 'https://github.com/ataraxia7899/React_native___Udemy_study',
		},
		{
			name: '디스코드라는 앱의 봇',
			date: '2025년 1월 23일',
			explain:
				'디스코드란 앱을 자주 사용하는데 만들어보고 싶어서 기능 하나씩 추가해보면서 만들어보았습니다.',
			url: 'https://github.com/ataraxia7899/discord_music_bot',
		},
	];

	function Card() {
		return (
			<div>
				<div className="explanation_Card">
					{Card_data.map((item, index) => (
						<div key={index} className="explanation">
							<text style={nameStyle}>{item.name || '-내용없음-'}</text>
							<br />
							<text style={dateStyle}>{item.date || '-내용없음-'}</text>
							<br />
							<text style={explainStyle}>{item.explain || '-내용없음-'}</text>
							<br />
							<a
								href={item.url || ''}
								target="_blank" // 새 탭에서 링크 열기
								rel="noopener noreferrer" // 보안을 위한 속성 추가
								style={{ fontSize: '11px' }}
							>
								{item.url || '-내용없음-'}
							</a>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div style={{ marginTop: '35px' }}>
			<p style={{ fontSize: '1.1rem' }}>
				<img
					src={projects_png}
					alt="handup_human"
					style={{ width: '20px', height: '20px' }}
				/>{' '}
				<b>Projects</b>
			</p>
			<Card />
		</div>
	);
}
