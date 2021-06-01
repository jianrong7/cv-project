import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import  './styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <FontAwesomeIcon icon={faFileImage} className="titleIcon" size="3x" />
            <span>CV Creator</span>
        </div>
    );
}