import { useState, useEffect } from 'react';
import books_png from '../assets/image/books.png';

export default function Educations() {
	const [educationsData, setEducationsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// 데이터 가져오기 함수
	const fetchEducationsData = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:8080/educations');

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setEducationsData(data);
		} catch (err) {
			setError(err.message);
			console.error('Educations 데이터 로딩 실패:', err);
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트 마운트 시 데이터 로드
	useEffect(() => {
		fetchEducationsData();
	}, []);

	// 로딩 상태 처리
	if (loading) {
		return (
			<div className="educations-section">
				<p>Educations 데이터 로딩 중...</p>
			</div>
		);
	}

	// 에러 상태 처리
	if (error) {
		return (
			<div className="educations-section">
				<p>Educations 데이터를 불러오는데 실패했습니다: {error}</p>
				<button onClick={fetchEducationsData}>다시 시도</button>
			</div>
		);
	}

	// 데이터가 없는 경우 처리
	if (educationsData.length === 0) {
		return (
			<div className="educations-section">
				<p className="educations-title-container">
					<img
						src={books_png}
						alt="books_icon"
						className="educations-icon"
					/>{' '}
					<b>Educations</b>
					<hr className="educations-hr" />
				</p>
				<p className="no-educations-message">
					등록된 학력 정보가 없습니다.
				</p>
			</div>
		);
	}

	return (
		<div className="educations-section">
			<p className="educations-title-container">
				<img
					src={books_png}
					alt="handup_human"
					className="educations-icon"
				/>{' '}
				<b>Educations</b>
				<hr className="educations-hr" />
			</p>
			<ul className="educations-list">
				{educationsData
					.sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
					.map((education) => (
						<li key={education.id}>
							{education.school} / {education.division}
							<ul className="educations-list">
								<li>{education.date}</li>
								<li>
									학점 : <b>{education.credit} / 4.5</b>
								</li>
							</ul>
						</li>
					))}
			</ul>
		</div>
	);
}