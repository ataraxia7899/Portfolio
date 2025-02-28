export default function Cover() {
	const CoverStyle = {
		width: '132%',
		height: '14rem',
		backgroundColor: '#ffefe3',
		position: 'absolute',
		// zIndex: '-1',
		// left: '0', // 왼쪽 여백 제거
		// right: '0', // 오른쪽 여백 제거
		marginLeft: '-50vw', // 부모 컨테이너의 margin 무시
		marginRight: '-50vw', // 부모 컨테이너의 margin 무시
	};

	return <div style={CoverStyle} />;
}
