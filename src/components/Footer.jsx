import React from 'react';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const footerStyle = {
		width: '100%',
		color: 'white',
		padding: '10px 0',
	};

	const contentStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '94%',
	};

	const smallStyle = {
		fontSize: '12px',
		margin: 0,
	};

	const gitbuttonStyle = {
		border: 'none',
		background: 'transparent',
		cursor: 'pointer',
		color: '#CA64F4',
		fontSize: '15px',
		fontWeight: 'bold',
	};

	const emailbuttonStyle = {
		border: 'none',
		background: 'transparent',
		cursor: 'pointer',
		color: 'white',
		fontSize: '15px',
		fontWeight: 'bold',
	};

	return (
		<footer style={footerStyle}>
			<hr style={{ border: '1px solid gray', margin: '10px -40px 18px' }} />
			<div style={contentStyle}>
				<small style={smallStyle}>
					© {currentYear} 변진환 (Byun JinHwan) . All rights reserved.
				</small>
				<div style={{ display: 'flex', gap: '10px' }}>
					<button
						style={emailbuttonStyle}
						onClick={() => {
							const subject = encodeURIComponent('포트폴리오 문의 - ');
							const body = encodeURIComponent(
								'안녕하세요, 포트폴리오를 보고 연락드립니다.\n\n'
							);
							window.open(
								`mailto:ataraxia7899@gmail.com?subject=${subject}&body=${body}`,
								'_self'
							);
						}}
					>
						Email
					</button>
					<button
						style={gitbuttonStyle}
						onClick={() => {
							window.open('https://github.com/ByunJinHwan', '_blank');
						}}
					>
						Github
					</button>
				</div>
			</div>
		</footer>
	);
}
