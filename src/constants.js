// 애플리케이션 전역 상수

// 페이지네이션
export const ITEMS_PER_PAGE = 6;
export const ITEMS_PER_PAGE_LIST = 9;

// 타이핑 효과
export const TYPING_SPEED = 100;
export const DELETE_SPEED = 50;
export const PAUSE_TIME = 2000;

// CSS 변수에서 헤더 높이 가져오기
export const getHeaderHeight = () => {
  const rootStyle = getComputedStyle(document.documentElement);
  const headerHeight = rootStyle.getPropertyValue('--header-height').trim();
  return parseInt(headerHeight, 10) || 72;
};
