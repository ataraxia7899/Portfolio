import '../App.css';

export default function Cover() {
	const CoverStyle = {
		width: '100vw', // 뷰포트 전체 너비로 설정
		height: '14rem',
		backgroundColor: '#ffefe3',
		position: 'absolute', // 절대 위치 설정
		left: '50%', // 요소를 수평으로 50% 위치에 배치
		transform: 'translateX(-50%)', // 정확한 중앙 정렬을 위해 요소를 왼쪽으로 50% 이동
		marginLeft: '0', // 왼쪽 여백 제거
		marginRight: '0', // 오른쪽 여백 제거
		top: '0', // 맨위로
		maxWidth: '100%', // 최대 너비 제한
		boxSizing: 'border-box', // 패딩과 보더를 너비에 포함
	};

	return <div style={CoverStyle} />;
}
