import { useState, useEffect } from 'react';
import '../App.css';
import trophy_png from '../assets/image/trophy.png';

export default function Awards() {
	const [awardsData, setAwardsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const AwardStyle = {
		marginTop: '35px',
		// alignItems: 'center',
	};

	// 데이터 가져오기 함수
	const fetchAwardsData = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:8080/award');

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setAwardsData(data);
		} catch (err) {
			setError(err.message);
			console.error('Awards 데이터 로딩 실패:', err);
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트 마운트 시 데이터 로드
	useEffect(() => {
		fetchAwardsData();
	}, []);

	// 로딩 상태 처리
	if (loading) {
		return (
			<div style={AwardStyle}>
				<p>Awards 데이터 로딩 중...</p>
			</div>
		);
	}

	// 에러 상태 처리
	if (error) {
		return (
			<div style={AwardStyle}>
				<p>Awards 데이터를 불러오는데 실패했습니다: {error}</p>
				<button onClick={fetchAwardsData}>다시 시도</button>
			</div>
		);
	}

	// 데이터가 없는 경우 처리
	if (awardsData.length === 0) {
		return (
			<div style={AwardStyle}>
				<p style={{ fontSize: '1.1rem' }}>
					<img
						src={trophy_png}
						alt="trophy_icon"
						style={{ width: '20px', height: '20px' }}
					/>{' '}
					<b>Awards</b>
					<hr style={{ width: '100%', margin: '10px 0' }} />
				</p>
				<p style={{ textAlign: 'center', color: '#666' }}>
					등록된 수상 내역이 없습니다.
				</p>
			</div>
		);
	}

	return (
		<div style={AwardStyle}>
			<p style={{ fontSize: '1.1rem' }}>
				<img
					src={trophy_png}
					alt="handup_human"
					style={{ width: '20px', height: '20px' }}
				/>{' '}
				<b>Awards</b>
				<hr style={{ width: '100%', margin: '10px 0' }} />
			</p>
			<table
				className="table"
				border="1"
				style={{ width: '100%', textAlign: 'center', tableLayout: 'fixed' }}
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
					{awardsData
						.sort((a, b) => new Date(b.date) - new Date(a.date))
						.map((item, index) => (
							<tr key={index}>
								<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
									{item.date}
								</td>
								<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
									{item.title}
								</td>
								<td style={{ maxHeight: '50px', overflowY: 'auto' }}>
									{item.degree_of_award}
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
