import '../App.css';
import human_png from '../assets/image/human.png';

export default function Title() {
	return (
		<div>
			<div style={{ padding: '0' }}>
				<img
					src={human_png}
					alt="human"
					style={{ width: '50px', height: '50px', marginBottom: '-20px' }}
				/>
				<h1>포트폴리오</h1>
				<p className="quote" style={{ marginTop: '-15px' }}>
					아직 미숙하지만 노력하는 개발자 <strong>변진환</strong> 입니다.
				</p>
			</div>
		</div>
	);
}
