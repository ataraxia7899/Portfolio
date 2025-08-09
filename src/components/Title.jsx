import '../App.css';
import human_png from '../assets/image/human.png';

export default function Title() {
	return (
		<div className="title-container">
			<img
				src={human_png}
				alt="human"
				className="title-icon"
			/>
			<h1>포트폴리오</h1>
			<p className="quote">
				아직 미숙하지만 노력하는 개발자 <strong>변진환</strong> 입니다.
			</p>
		</div>
	);
}