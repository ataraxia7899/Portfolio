import './Projects_Data/Projects_Data';
/* Project.jsx에서 값을 불러옴 */

export default function Project_Card(props) {
	const nameStyle = { fontSize: '20px', fontWeight: 'bold' };

	const dateStyle = {
		fontSize: '12px',
		fontWeight: 'bold',
		color: '#989898',
	};

	const explainStyle = { fontSize: '13px' };

	return (
		<div>
			<div className="explanation_Card">
				{props.Card_data.map((item, index) => (
					<div key={index} className={'explanation'}>
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
