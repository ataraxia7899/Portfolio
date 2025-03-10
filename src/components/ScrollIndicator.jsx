import { useState, useEffect, useCallback } from 'react';

export default function ScrollIndicator() {
	const [scroll, setScroll] = useState(0);

	const onScroll = useCallback(() => {
		window.requestAnimationFrame(() => {
			//requestAnimationFrame 사용으로 애니메이션 성능 최적화
			const { scrollTop, scrollHeight, clientHeight } =
				document.documentElement;
			// document.documentElement는 HTML의 속성과 메서드에 접근할 수 있도록 해줌으로써
			// 순서대로 현재 페이지에서 얼마나 스크롤했는지, 페이지의 실제 전체 높이(보이지 않는 부분도 포함), 브라우저 창에서 볼 수 있는 영역의 높이를 불러오는 코드
			const maxHeight = scrollHeight - clientHeight;
			const scrolledPercent = (scrollTop / maxHeight) * 100;
			setScroll(scrolledPercent);
		});
	}, []);

	useEffect(() => {
		let timeoutId = null;
		const debouncedScroll = () => {
			if (timeoutId) {
				window.cancelAnimationFrame(() => onScroll());
			}
			timeoutId = window.requestAnimationFrame(() => onScroll());
		};

		window.addEventListener('scroll', debouncedScroll, { passive: true });
		// 스크롤된 값이 변경될때마다 debouncedScroll이 실행
		return () => {
			window.removeEventListener('scroll', debouncedScroll);
			// 등록했던 이벤트 리스너 제거 (메모리 누수 방지)
		};
	}, [onScroll]);
	// onScroll 함수가 컴포넌트 내에서 변경될 때 이벤트 리스너를 제거하고 다시 등록되기 위해 배열안에 들어감.

	return (
		<div className="scroll_bar">
			<div
				style={{ width: `${scroll}%`, transition: 'width 0.1s ease-out' }}
				className="scroll_indicator"
			/>
		</div>
	);
}
