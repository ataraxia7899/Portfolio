import books_png from '../assets/image/books.png';

export default function Educations() {
	const UIStyle = {
		fontSize: '0.8rem',
		display: 'flex',
		flexDirection: 'column' /* 세로 정렬 */,
		gap: '5px' /* 리스트 항목 사이의 간격 */,
	};

	return (
		<div style={{ marginTop: '35px' }}>
			<p style={{ fontSize: '1.1rem' }}>
				<img
					src={books_png}
					alt="handup_human"
					style={{ width: '20px', height: '20px' }}
				/>{' '}
				<b>Educations</b>
				<hr style={{ width: '100%', margin: '10px 0' }} />
			</p>
			<ul style={UIStyle}>
				<li>수원과학대학교 (2년제) / 정보통신과</li>
				<ul style={UIStyle}>
					<li>2020.03 ~ 2022.02 (졸업)</li>
					<li>
						학점: <b>4.01 / 4.5</b>
					</li>
				</ul>
				<li>안양대학교 (4년제) / 소프트웨어학과</li>
				<ul style={UIStyle}>
					<li>2022.03 ~ 2024.02 (편입/졸업)</li>
					<li>
						학점: <b>2.92 / 4.5</b>
					</li>
				</ul>
			</ul>
		</div>
	);
}
