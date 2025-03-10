import { useState, useEffect, useCallback } from 'react';

export default function ScrollIndicator() {
	const [scroll, setScroll] = useState(0);

	const onScroll = useCallback(() => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		// document.documentElement는 HTML의 속성과 메서드에 접근할 수 있도록 해줌으로써
		// 순서대로 현재 페이지에서 얼마나 스크롤했는지, 페이지의 실제 전체 높이(보이지 않는 부분도 포함), 브라우저 창에서 볼 수 있는 영역의 높이를 불러오는 코드
		const maxHeight = scrollHeight - clientHeight;
		const scrolledPercent = (scrollTop / maxHeight) * 100;
		setScroll(scrolledPercent);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 스크롤된 값이 변경될때마다 onscroll이 실행
		return () => {
			window.removeEventListener('scroll', onScroll);
			// 등록했던 이벤트 리스너 제거 (메모리 누수 방지)
		};
	}, [onScroll]);
	// onScroll 함수가 컴포넌트 내에서 변경될 때 이벤트 리스너를 제거하고 다시 등록되기 위해 배열안에 들어감.

	return (
		<div className="scroll_bar">
			<div style={{ width: `${scroll}%` }} className="scroll_indicator" />
		</div>
	);
}
