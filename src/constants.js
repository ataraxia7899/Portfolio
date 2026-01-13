// 애플리케이션 전역 상수

// 페이지네이션
export const ITEMS_PER_PAGE = 9;

// 타이핑 효과
export const TYPING_SPEED = 100;
export const DELETE_SPEED = 50;
export const PAUSE_TIME = 2000;

// 스크롤 이벤트 쓰로틀링 (ms)
export const SCROLL_THROTTLE_DELAY = 100;
export const PROGRESS_THROTTLE_DELAY = 50;

// CSS 변수에서 헤더 높이 가져오기
export const getHeaderHeight = () => {
  const rootStyle = getComputedStyle(document.documentElement);
  const headerHeight = rootStyle.getPropertyValue('--header-height').trim();
  return parseInt(headerHeight, 10) || 72;
};
