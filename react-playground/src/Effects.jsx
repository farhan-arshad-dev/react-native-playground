/*
    Synchronizing with Effects
    Some components need to synchronize with external systems. 
    For example, you might want to control a non-React component
    based on the React state, set up a server connection, or send 
    an analytics log when a component appears on the screen.

    effect refers to any operation or action within a component that affects something outside of its local scope or environment.
    Data fetching:  Making API calls to a server
    Timers: Setting up setInterval or setTimeout functions.
    Local storage interaction: Reading from or writing to localStorage or sessionStorage.

    Effects are typically used to “step out” of your React code and synchronize with some external system.

    By default, your Effect will run after every commit. (React reanding => Triggering, Rendering, Committing).
    `useEffect` “delays” a piece of code from running until that render is reflected on the screen
*/

import { useEffect, useState, useRef } from "react";


export function MyComponent() {
    useEffect(() => {
        // Code here will run after *every* render
    });
    return <div />;
}


// By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current.play();
        } else {
            console.log('Calling video.pause()');
            ref.current.pause();
        }
        return () => { // clean up functio (optional) but use full in development mode cuz triggers twice in development mode with Stict
            // no need to for now.
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

export function VideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');
    return (
        <>
            <h1>useEffects</h1>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <br />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <br />
            <br />
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}

/*
    The cleanup function returned from a useEffect hook in React is called in two primary scenarios:

    - When the component unmounts: This is the most commonly understood scenario. When the component 
    that the useEffect belongs to is removed from the DOM, its cleanup function is executed to clear 
    up any side effects (e.g., subscriptions, timers, ongoing API requests) that were initiated by the effect.

    - Before the next effect runs due to dependency changes: If the useEffect has a dependency array 
    and one or more of those dependencies change, the cleanup function from the previous effect run is
    executed before the new effect is run. This ensures that any previous side effects are cleaned up 
    before new ones are established based on the updated dependencies.

*/

/*
    Not an Effect: Buying a product 
    
    useEffect(() => {
        // 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.
        fetch('/api/buy', { method: 'POST' });
    }, []);
*/

function Playground() {
    const [text, setText] = useState('a');

    useEffect(() => {
        function onTimeout() {
            console.log('⏰ ' + text);
        }

        console.log('🔵 Schedule "' + text + '" log');
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log('🟡 Cancel "' + text + '" log');
            clearTimeout(timeoutId);
        };
    }, [text]);

    return (
        <>
            <label>
                What to log:{' '}
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
            <h1>{text}</h1>
        </>
    );
}

export function UseEffectPlayground() {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>This playground can help you “get a feel” for how Effects work in practice.
                check the console for the effect output.
            </h1>
            <button onClick={() => setShow(!show)}>
                {show ? 'Unmount' : 'Mount'} the component
            </button>
            {show && <hr />}
            {show && <Playground />}
        </>
    );
}

/*
    There are two common cases in which you don’t need Effects:
    - You don’t need Effects to transform data for rendering
    - You don’t need Effects to handle user events.

    Question in mind => how to do long running task in the callback and update the status accordingly.
    Answer: For network/async tasks → use async/await and state.
    We can combine useEffect and async/await
    You often combine them: 
    - useEffect decides when the async task should run (after render, or when dependencies change).
    - async/await describes how the task runs.
    - useEffect makes sure the fetch runs once on mount.
    - async/await handles the async fetch.
    - Use useEffect to say when something should happen in React.
    - Use async/await inside it (or inside a handler) to describe how to perform the async task.
*/

export default function Example() {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function loadData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const json = await res.json();
            if (isMounted) setData(json); // prevent update after unmount
        }

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    return <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>;
}
