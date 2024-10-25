import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function CloseButton({ setFullscreen }) {
    const [showCloseButton, setShowCloseButton] = useState(true)
    const [isMouseOver, setIsMouseOver] = useState(false)

    useEffect(() => {
        if (isMouseOver) {
            setShowCloseButton(true)
            return;
        }

        const timer = setTimeout(() => {
            setShowCloseButton(false)
        }, 2000);

        return () => clearTimeout(timer)
    }, [isMouseOver])

    return(
        <IconX 
            className={`closeButton clickable ${showCloseButton ? 'fadeIn' : 'fadeOut'}`}
            stroke={2} onClick={() => setFullscreen(false)}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}/>
    )
}

export default CloseButton;