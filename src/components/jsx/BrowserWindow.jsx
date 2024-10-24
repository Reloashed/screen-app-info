import { IconX } from "@tabler/icons-react";
import '../css/browser-window.css'
import { useState } from "react";

function BrowserWindow({ fullscreen, setFullscreen }) {
    const {shouldClose, setShouldClose} = useState(false);

    function handleClose() {
        setFullscreen(false)
        setShouldClose(true)
    }

    return (
        <div className={`background ${fullscreen && shouldClose ? 'backgroundFadeOut' : ''}`}>
            <div className="container">
                <IconX className={"closeButton clickable"} stroke={2} onClick={handleClose} />
            </div>
        </div>
    )
}

export default BrowserWindow;