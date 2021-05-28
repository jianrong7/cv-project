import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import  './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <span>Copyright</span>
            <FontAwesomeIcon icon={faCopyright} />
            <span>2021 jianrong7</span>
            <a href="https://github.com/jianrong7" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="githubIcon" size="lg" />
            </a>
        </div>
    );
}