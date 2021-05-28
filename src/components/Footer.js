import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import  './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <span>Copyright</span>
            <FontAwesomeIcon icon={faCopyright} />
            <span>2021 jianrong7</span>
        </div>
    );
}