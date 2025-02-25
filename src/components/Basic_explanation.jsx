import '../App.css';
import cake_png from '../assets/image/cake.png';
import email_png from '../assets/image/email.png';

export default function Basic_explanation() {
	return (
		<div>
			<p>
				<img
					src={cake_png}
					alt="cake"
					style={{ width: '17px', height: '17px' }}
				/>{' '}
				<b>birth</b>
				<br />
				2001. 09. 29
			</p>
			<p>
				<img
					src={email_png}
					alt="email"
					style={{ width: '17px', height: '15px' }}
				/>{' '}
				<b>E-Mail</b>
				<br />
				ataraxia7899@gmail.com
			</p>
		</div>
	);
}
