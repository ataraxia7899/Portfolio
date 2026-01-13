import { Component } from 'react';

// 에러 바운더리 컴포넌트
// React 렌더링 중 발생하는 에러를 캐치하여 폴백 UI 표시
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: 'var(--background)',
          color: 'var(--text-primary)'
        }}>
          <h1 style={{ marginBottom: '1rem' }}>문제가 발생했습니다</h1>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            페이지를 새로고침하거나 나중에 다시 시도해 주세요.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--border-radius-sm)',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            새로고침
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
