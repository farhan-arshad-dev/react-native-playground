/*
    useRef() hook => Like state, refs are retained by React between re-renders. 
    However, setting state re-renders a component. Changing a ref does not! 
    You can access the current value of that ref through the ref.current property.
    - “remember” information without re-rendering
    - Access DOM elements by refs
        const inputRef = useRef(null);
        <input ref={inputRef} />
    - don’t trigger re-renders when you set them
    In case of re-rendring if react remove the element, than ref value will set to null by react.
*/

import { useState } from 'react';
import { useRef } from 'react';

export default function Chat() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    let timeoutID = useRef(null);

    function handleSend() {
        setIsSending(true);
        timeoutID.current = setTimeout(() => {
            alert('Sent!');
            setIsSending(false);
        }, 3000);
    }

    function handleUndo() {
        setIsSending(false);
        clearTimeout(timeoutID.current);
    }

    return (
        <>
            <input
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                disabled={isSending}
                onClick={handleSend}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
            {isSending &&
                <button onClick={handleUndo}>
                    Undo
                </button>
            }
        </>
    );
}

export function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoPlayer = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (nextIsPlaying) {
            videoPlayer.current.play();
        } else {
            videoPlayer.current.pause();
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <br />
            <br />
            <video width="250" ref={videoPlayer}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}



