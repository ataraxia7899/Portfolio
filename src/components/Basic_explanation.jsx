import '../App.css';
import cake_png from '../assets/image/cake.png';
import email_png from '../assets/image/email.png';

export default function Basic_explanation() {
	return (
		<div className="basic-info">
            <p className="info-block">
                <img
                    src={cake_png}
                    alt="cake"
                    className="info-icon"
                />
                <b className="info-label">birth</b>
                <br />
                2001. 09. 29
            </p>
            <p className="info-block">
                <img
                    src={email_png}
                    alt="email"
                    className="info-icon"
                />
                <b className="info-label">E-Mail</b>
                <br />
                ataraxia7899@gmail.com
            </p>
        </div>
	);
}