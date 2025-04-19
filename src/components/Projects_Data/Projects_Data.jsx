import Project_Card from '../Project_Card';

export default function Projects_Data() {
	const Card_data = [
		{
			name: '졸업프로젝트',
			date: '2023년 3월 23일',
			skills: ['node.js', 'mysql', '앱인벤터'],
			explain: '다양한 점을 도전해 본 버스앱 개발',
			detail_explain: `
			처음으로 접한 프로젝트라 많은 도움이 필요했지만 팀원들과의 팀워크를 통해 열심히 개발하였으며, <br/>
			그만큼 저는 많은 아이디어를 제시해 팀원들이 생각치 못한 기능이라거나 기능개발에 대한 고민같은 것들을 많이 해결해 나갈 수 있었습니다.<br/>
			프로젝트에서는 대부분은 블록코딩을 사용하는 툴인 앱인벤터를 통해 프론트엔드 작업을 했고,<br/>
			백엔드에서는 DB와 node.js를 연결하는 역할을 맡았습니다.<br/>
			다만 node.js를 처음 접해보게 되어 같은 조의 선배님께 열심히 질문을 함으로써 해당 기능을 제대로 구현할 수 있었습니다.
			`,
			url: 'https://github.com/HS-0914/Walkway',
		},
		{
			name: '파이썬 팀프로젝트',
			date: '2023년 6월 9일',
			skills: ['python'],
			explain: '1학년 전공과목에서 진행되었던 팀프로젝트',
			detail_explain: `
				팀원들이 한명은 내가 짠 코드의 오류를 수정하는 역할을 해주었고 <br/>
				한명은 ppt와 발표를 담당하여서 코드를 작성할 때 따로 누구한테 보여질 일 없다 생각하고 <br/>
				가독성이 좋은 코드보다는 기능을 목표로 코드를 짜서 코드가 깔끔하지 않습니다.
				`,
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
			explain: 'React 기초 기능들을 사용해보는 코드였습니다.',
			detail_explain:
				'React를 처음 공부를 시작하면서 Youtube를 보고 따라한 코드입니다.',
			url: 'https://github.com/ataraxia7899/newbie',
		},
		{
			name: '현재 공부중인 React 코드들',
			skills: ['React'],
			explain: 'Udemy에서 강의를 들으며 공부한 기록',
			detail_explain: `
				Udemy에서 강의를 들으면서 따라 작성한 코드들로 필요한 부분은 정리해가며 최대한 직접 코드를 작성해보려고 노력하며 진행한 공부를 진행하였습니다.<br/>
				한 프로젝트안에 여러 브랜치로 파일을 구분해놨습니다.
				`,
			url: 'https://github.com/ataraxia7899/React___Udemy_study',
		},
		{
			name: '현재 공부중인 React Native 코드들',
			skills: ['React Native'],
			explain: 'Udemy에서 강의를 들으며 공부한 기록',
			detail_explain: `Udemy에서 강의를 들으면서 따라 작성한 코드들로 필요한 부분은 정리해가며 최대한 직접 코드를 작성해보려고 노력하며 진행한 공부를 진행하였습니다.<br/>
				한 프로젝트안에 여러 브랜치로 파일을 구분해놨습니다.
				`,
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
				ai의 도움을 받아서 있으면 편하겠다 싶은 기능들을 넣어서 제작하게 되었습니다.<br/><br/>
				
				아직은 유튜브에서 음악을 재생하는 것뿐인 봇인데 덕분에 클라우드를 사용해보며 
				여러 경험을 해보고 있어 하길 잘했다고 생각이 들게 하는 프로젝트라고 생각합니다.<br/><br/>
				
				사실 내가 편하려고 만들었던 봇에 생각보다 흥미를 불러일으켜서 
				앞으로 더 많은 기능들을 추가할 예정입니다.<br/><br/>
				
				<strong>구글 클라우드를 통해 24시간 호스팅을 실행중이였는데 비용때문에 봇 호스팅 정지중</strong>
			`,
			url: 'https://github.com/ataraxia7899/discord_music_bot',
		},
		{
			name: '포트폴리오 작성',
			date: '2025년 2월 25일',
			skills: ['React'],
			explain:
				'기존에 노션을 통해 작성한 포트폴리오를 React코드를 이용해 직접 웹페이지로 만들어본 프로젝트',
			detail_explain: `
			기존에 노션을 통해 작성된 포트폴리오를 React코드를 통해 직접 웹페이지로 제작하였습니다.<br/>
			직접 스타일링도 노션처럼 해보면서 Css능력도 키워보고 해당 경험을 통해 React의 이해도를 높일 수 있었습니다.<br/>
			해당 사이트는 나의 포트폴리오 페이지이기때문에 계속 업데이트 될 예정입니다.<br/>
			아직은 값이 그래도 그렇게 많지는 않아서 React를 통해 모든 것을 진행했는데<br/>
			다음에 값이 더 많아지면 백엔드와 DB를 통해 값을 서버와 주고 받는 식으로도 도전해볼 예정입니다.<br/><br/>

			<strong>현재 netlify를 통해 24시간 호스팅을 실행중</strong>
			`,
			url: 'https://github.com/ataraxia7899/Portfolio',
		},
		{
			name: '크롬 확장프로그램(영상 배속)',
			date: '2025년 3월 16일',
			skills: ['JavaScript'],
			explain: '웹사이트 영상 배속 확장프로그램',
			detail_explain: `
				크롬과 같은 크로미움 기반 브라우저를 평소에 사용하는데 어떤 영상이든 원할때 배속하거나 <br/>
				배속을 자주 쓰는 사이트의 경우엔 자동으로 배속이 활성화되도록 ai의 도움을 받아 제작하게되었습니다.<br/><br/>
				
				이를 통해 크롬 웹스토어에 내가 제작한 확장프로그램을 올려볼 수 있는 좋은 경험이 되었습니다.<br/><br/>
				
				필요성을 느껴서 만들게 된 앱이긴 해도 다른 배속 확장프로그램들에 비해 메리트가 있다고 생각하여<br/>
				좋은 성적을 기대하고 있습니다.<br/><br/>
				
				<strong>해당 확장의 핵심 기능</strong><br/>
				1. 대부분의 비디오 속도 제어 기능<br/>
				2. 단축키 시스템을 통한 편의성 향상<br/>
				3. 사이트별 자동 배속 설정을 통해 자동으로 설정 배속이 기본값으로 고정<br/>
				4. 사이트별 자동 배속 설정에 등록한 사이트의 활성화 / 비활성화 기능 <br/>
			`,
			url: 'https://github.com/ataraxia7899/Video-Speed-Up-Chrome-Extension',
		},
	];
	return <Project_Card Card_data={Card_data} />;
}
