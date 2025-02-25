import '../App.css';
import trophy_png from '../assets/image/trophy.png';

export default function Awards() {
	const AwardStyle = {
		marginTop: '35px',
		// alignItems: 'center',
	};

	//데이터 배열
	const data = [
		{
			date: '2020년11월29일',
			contest: '캡스톤 디자인 경진대회',
			prize: '최우수상',
			host: '안양대학교',
		},
	];

	return (
		<div style={AwardStyle}>
			<p style={{ fontSize: '1.1rem' }}>
				<img
					src={trophy_png}
					alt="handup_human"
					style={{ width: '20px', height: '20px' }}
				/>{' '}
				<b>Awards</b>
			</p>
			<table
				className="table"
				border="1"
				style={{ width: '80%', textAlign: 'center', tableLayout: 'fixed' }}
			>
				<thead>
					<tr>
						<th>날짜</th>
						<th>대회</th>
						<th>수상</th>
						<th>주최기관</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
								{item.date}
							</td>
							<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
								{item.contest}
							</td>
							<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
								{item.prize}
							</td>
							<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
								{item.host}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
