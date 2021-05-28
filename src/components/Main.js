import CVForm from './CVForm/CVForm.js';
import CVPreview from './CVPreview/CVPreview.js';
import './Main.css'

function Main() {
    return (
        <div className="main">
            <CVForm />
            <CVPreview />
        </div>
    )
}

export default Main;