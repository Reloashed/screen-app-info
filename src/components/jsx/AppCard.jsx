import { useState } from "react";
import BrowserWindow from "./BrowserWindow";

function AppCard({ name }) {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <div>
            {fullscreen ?
                <BrowserWindow fullscreen={fullscreen} setFullscreen={setFullscreen} />
                :
                <div className="clickable" onClick={() => setFullscreen(true)}>
                    <p>{name}</p>
                </div>
            }
        </div>
    )
}

export default AppCard;