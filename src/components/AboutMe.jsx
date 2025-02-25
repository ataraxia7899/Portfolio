import '../App.css';
import handup_human_png from '../assets/image/handup_human.png';

export default function AboutMe() {
	const AboutMeStyle = {
		marginTop: '35px',
	};

	const UIStyle = {
		fontSize: '0.8rem',
		display: 'flex',
		flexDirection: 'column' /* 세로 정렬 */,
		gap: '5px' /* 리스트 항목 사이의 간격 */,
	};

	return (
		<div style={AboutMeStyle}>
			<img
				src={handup_human_png}
				alt="handup_human"
				style={{ width: '20px', height: '20px' }}
			/>{' '}
			<b style={{ fontSize: '1.1rem' }}>About me</b>
			<hr style={{ width: '80%', margin: '10px 0' }} />
			<ul style={UIStyle}>
				<li>유지보수가 쉬운 SW를 개발하고 싶어요.</li>
				<li>
					항상 사용자의 입장을 생각하고 사용자 친화적인 기능을 만들고자해요.
				</li>
				<li>꾸준하게 관련소식을 찾아보며 항상 성장하려고 노력해요.</li>
			</ul>
		</div>
	);
}
