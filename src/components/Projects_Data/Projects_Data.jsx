import Project_Card from '../Project_Card';

export default function Projects_Data() {
	const Card_data = [
		{
			name: '졸업프로젝트',
			date: '2023년 3월 23일',
			skills: ['node.js', 'mysql', '앱인벤터'],
			explain: '다양한 점을 도전해 본 버스앱 개발',
			detail_explain:
				'처음으로 접한 프로젝트라 많은 도움이 필요했지만 팀원들과의 팀워크를 통해 열심히 개발하였으며, 그만큼 저는 많은 아이디어를 제시해 팀원들이 생각치 못한 기능이라거나 기능개발에 대한 고민같은 것들을 많이 해결해 나갈 수 있었다. 프로젝트에서는 DB와 node.js를 연결하는 백엔드코드등과 앱을 UI를 만드는 역할을 맡았다.',
			url: 'https://github.com/HS-0914/Walkway',
		},
		{
			name: '파이썬 팀프로젝트',
			date: '2023년 6월 9일',
			skills: ['python'],
			explain: '1학년 전공과목에서 진행되었던 팀프로젝트',
			detail_explain:
				'팀원들이 한명은 내가 짠 코드의 오류를 수정하는 역할을 해주었고 한명은 ppt와 발표를 담당하여서 코드를 작성할 때 따로 누구한테 보여질 일 없다 생각하고 코드를 짜서  코드가 깔끔하지 않습니다.',
			url: 'https://github.com/ataraxia7899/python111',
		},
		{
			name: '기초적인 Todo 프로젝트',
			date: '2024년 10월 25일',
			skills: ['React'],
			explain: 'Youtube를 보고 코드를 따라해본.. 코드',
			detail_explain:
				'유튜브에서는 Todo 리스트를 생성하는 것만 만들어보고 리스트 항목을 삭제하는 것은 알려주지 않고 혼자 할 수 있도록 지시해주었지만, ai의 도움을 통해 삭제기능을 동작하도록 만들어냈다.',
			url: 'https://github.com/ataraxia7899/todo_project',
		},
		{
			name: 'React 기초 작업들 사용해보기',
			date: '2024년 10월 19일',
			skills: ['React'],
			explain:
				'React를 처음 공부를 시작하면서 Youtube를 보고 따라한 코드입니다.',
			detail_explain: 'React 기초 기능들을 사용해보는 코드였습니다.',
			url: 'https://github.com/ataraxia7899/newbie',
		},
		{
			name: '현재 공부중인 React 코드들',
			skills: ['React'],
			explain: '한 프로젝트안에 여러 브랜치로 파일을 구분해놨습니다.',
			detail_explain:
				'Udemy에서 강의를 들으면서 따라 작성한 코드들로 필요한 부분은 정리해가며 최대한 직접 코드를 작성해보려고 노력하며 진행한 공부를 진행하였습니다.',
			url: 'https://github.com/ataraxia7899/React___Udemy_study',
		},
		{
			name: '현재 공부중인 React Native 코드들',
			skills: ['React Native'],
			explain: '한 프로젝트안에 여러 브랜치로 파일을 구분해놨습니다.',
			detail_explain:
				'Udemy에서 강의를 들으면서 따라 작성한 코드들로 필요한 부분은 정리해가며 최대한 직접 코드를 작성해보려고 노력하며 진행한 공부를 진행하였습니다.',
			url: 'https://github.com/ataraxia7899/React_native___Udemy_study',
		},
		{
			name: '디스코드라는 앱의 봇',
			date: '2025년 1월 23일',
			skills: ['python'],
			explain:
				'디스코드란 앱을 자주 사용하는데 만들어보고 싶어서 기능 하나씩 추가해보면서 만들어보았습니다.',
			detail_explain: `
				평소 디스코드라는 채팅, 통화등을 지원하는 메신저를 자주 사용하는데, 
				ai의 도움을 받아 사용 중 있으면 편하겠다 싶은 기능들을 넣어서 제작하게 되었습니다.<br/><br/>
				
				아직은 유튜브에서 음악을 재생하는 것뿐인 봇인데 덕분에 클라우드를 사용해보며 
				여러 경험을 해보고 있어 하길 잘했다고 생각이 들게 하는 프로젝트라고 생각합니다.<br/><br/>
				
				사실 내가 편하려고 만들었던 봇에 생각보다 흥미를 불러일으켜서 
				앞으로 더 많은 기능들을 추가할 예정입니다.<br/><br/>
				
				<strong>현재 구글 클라우드를 통해 24시간 호스팅을 실행중</strong>
			`,
			url: 'https://github.com/ataraxia7899/discord_music_bot',
		},
		{
			name: '포트폴리오 작성',
			date: '2025년 2월 25일',
			skills: ['React'],
			explain:
				'기존에 노션에 작성한 포트폴리오를 React코드를 이용해 직접 웹페이지로 만들어본 프로젝트',
			url: 'https://github.com/ataraxia7899/Portfolio',
		},
	];
	return <Project_Card Card_data={Card_data} />;
}
