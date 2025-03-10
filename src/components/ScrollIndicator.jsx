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

	/* 디바운스란 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것 */
	useEffect(() => {
		// 디바운스 처리를 위한 타이머 ID
		let timeoutId = null;
		const debouncedScroll = () => {
			if (timeoutId) {
				// 이전에 예약된 애니메이션 프레임이 있다면 취소
				window.cancelAnimationFrame(() => onScroll());
			}
			timeoutId = window.requestAnimationFrame(() => onScroll());
			// 새로운 애니메이션 프레임 예약
			// requestAnimationFrame은 브라우저의 다음 리페인트 전에
			// 실행될 콜백을 예약하여 부드러운 애니메이션 구현
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
			{/* `${scroll}%`는 템플릿 리터럴을 사용하여 스크롤 진행률을 동적으로 너비에 적용하는 코드 */}
		</div>
	);
}
