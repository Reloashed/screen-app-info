import '../css/browser-window.css'
import CloseButton from './CloseButton';

function BrowserWindow({ setFullscreen, name }) {
    return (
        <div className={`background backgroundFadeIn`}>
            <div className="container">
                <div className='closeButtonWrapper'>
                    <CloseButton setFullscreen={setFullscreen} />
                </div>
                <div className='innerContainer'>
                    <p className='glowingText'>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default BrowserWindow;