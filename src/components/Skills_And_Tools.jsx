import { useState, useEffect } from 'react';
import '../App.css';
import pick_png from '../assets/image/pick.png';

export default function Skills_and_Tool() {
	const [skillsData, setSkillsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// 데이터 가져오기 함수
	const fetchSkillsData = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:8080/skills');

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setSkillsData(data);
		} catch (err) {
			setError(err.message);
			console.error('Skills 데이터 로딩 실패:', err);
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트 마운트 시 데이터 로드
	useEffect(() => {
		fetchSkillsData();
	}, []);

	// 데이터에서 고유한 field 값들을 동적으로 추출
	const fields = [...new Set(skillsData.map((item) => item.field))];

	// 로딩 상태 처리
	if (loading) {
		return (
			<div className="skills-section">
				<p>Skills 데이터 로딩 중...</p>
			</div>
		);
	}

	// 에러 상태 처리
	if (error) {
		return (
			<div className="skills-section">
				<p>Skills 데이터를 불러오는데 실패했습니다: {error}</p>
				<button onClick={fetchSkillsData}>다시 시도</button>
			</div>
		);
	}

	return (
		<div className="skills-section">
			<p className="skills-title-container">
				<img
					src={pick_png}
					alt="handup_human"
					className="skills-icon"
				/>{' '}
				<b>Skills and Tools</b>
				<hr className="skills-hr" />
			</p>
			<table
				className="skills-table"
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
							<td className="skills-table-cell">
								{skillsData
									.filter((item) => item.field === field && item.often === 1)
									.map((item, index) => (
										<span key={item.id || index}>
											{index > 0 && ', '}
											{item.name}
										</span>
									))}
							</td>

							{/* 해본 적 있어요 열 */}
							<td className="skills-table-cell">
								{skillsData
									.filter((item) => item.field === field && item.often === 2)
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