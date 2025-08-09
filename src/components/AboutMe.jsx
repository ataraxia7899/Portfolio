import { useState, useEffect } from 'react';
import '../App.css';
import handup_human_png from '../assets/image/handup_human.png';

export default function AboutMe() {
	const [aboutMeData, setAboutMeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// 데이터 가져오기 함수
	const fetchAboutMeData = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:8080/aboutme');

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setAboutMeData(data);
		} catch (err) {
			setError(err.message);
			console.error('About Me 데이터 로딩 실패:', err);
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트 마운트 시 데이터 로드
	useEffect(() => {
		fetchAboutMeData();
	}, []);

	// 로딩 상태 처리
	if (loading) {
		return (
			<div className="about-me">
				<p>로딩 중...</p>
			</div>
		);
	}

	// 에러 상태 처리
	if (error) {
		return (
			<div className="about-me">
				<p>데이터를 불러오는데 실패했습니다: {error}</p>
			</div>
		);
	}

	return (
		<div className="about-me">
			<img
				src={handup_human_png}
				alt="handup_human"
				className="about-me-icon"
			/>
			<b className="about-me-title">About me</b>
			<hr className="about-me-hr" />
			<ul className="about-me-list">
				{aboutMeData
					.sort((a, b) => a.item_order - b.item_order)
					.map((item) => (
						<li key={item.id}>{item.description}</li>
					))}
			</ul>
		</div>
	);
}