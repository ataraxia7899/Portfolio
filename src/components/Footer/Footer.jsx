import './Footer.css';

// Footer 컴포넌트
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Portfolio. Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
          {' '}and{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
        </p>
      </div>
    </footer>
  );
}

