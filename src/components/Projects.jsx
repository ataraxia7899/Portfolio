import '../App.css';
import projects_png from '../assets/image/projects.png';

export default function Projects() {
	const Card_data = [
		{
			name: '졸업프로젝트',
			data: '2023년 3월 23일',
			explain: '다양한 점을 도전해 본 버스앱 개발',
			url: 'https://github.com/HS-0914/Walkway',
		},
	];

	function Card() {
		return (
			<div>
				<div className="explanation_Card">
					{Card_data.map((item, index) => (
						<div key={index} className="explanation">
							<p>
								{item.name || ''}
								<br />
								{item.data || ''}
								<br />
								{item.explain || ''}
								<br />
								{item.url || ''}
							</p>
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
