import { useState, useEffect } from 'react';

// 다크/라이트 테마를 관리하는 커스텀 훅
// 시스템 설정 또는 사용자 선택에 따라 테마를 전환합니다.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 로컬 스토리지에 저장된 테마 확인
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // 시스템 설정 확인
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // HTML 요소에 테마 속성 설정
    document.documentElement.setAttribute('data-theme', theme);
    // 로컬 스토리지에 저장
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // 사용자가 수동으로 설정하지 않은 경우에만 시스템 테마 따르기
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return { theme, toggleTheme, isDark };
}

export default useTheme;
