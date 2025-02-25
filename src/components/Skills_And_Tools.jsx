import '../App.css';
import pick_png from '../assets/image/pick.png';

export default function Skills_and_Tool() {
	const ChartStyle = {
		marginTop: '35px',
		// alignItems: 'center',
	};

	// 구분할 항목들을 배열로 관리
	const fields = ['Language', 'Frontend', 'RDBMS', 'DevOps'];

	// 데이터 배열
	const data = [
		{ often: 2, field: 'Language', name: 'Java' },
		{ often: 1, field: 'Language', name: 'Python' },
		{ often: 2, field: 'Language', name: 'C++' },
		{ often: 2, field: 'Language', name: 'C' },
		{ often: 2, field: 'Language', name: 'node.js' },
		{ often: 2, field: 'Language', name: 'javaScript' },
		{ often: 2, field: 'Frontend', name: 'html&CSS' },
		{ often: 1, field: 'Frontend', name: 'React' },
		{ often: 1, field: 'RDBMS', name: 'MySQL' },
		{ often: 2, field: 'RDBMS', name: 'Oracle' },
		{ often: 1, field: 'DevOps', name: 'Git' },
	];

	return (
		<div style={ChartStyle}>
			<p style={{ fontSize: '1.1rem' }}>
				<img
					src={pick_png}
					alt="handup_human"
					style={{ width: '20px', height: '20px' }}
				/>{' '}
				<b>Skills and Tools</b>
			</p>
			<table
				className="table"
				border="1"
				style={{ width: '80%', textAlign: 'center', tableLayout: 'fixed' }}
			>
				<thead>
					<tr>
						<th>구분</th>
						<th>많이 해봤어요</th>
						<th>해본 적 있어요</th>
					</tr>
				</thead>
				<tbody>
					{/* fields 배열을 기준으로 행 생성 */}
					{fields.map((field, index) => (
						<tr key={index}>
							{/* 구분 열 */}
							<td>{field}</td>

							{/* 많이 해봤어요 열 */}
							<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
								{data
									.filter((item) => item.field === field && item.often === 1) // 조건에 맞는 항목 필터링
									.map((item, index) => (
										<span key={index}>
											{index > 0 && ', '}
											{item.name}
										</span>
									))}
							</td>

							{/* 해본 적 있어요 열 */}
							<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
								{data
									.filter((item) => item.field === field && item.often === 2) // 조건에 맞는 항목 필터링
									.map((item, index) => (
										<span key={index}>
											{index > 0 && ', '}
											{item.name}
										</span>
									))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
