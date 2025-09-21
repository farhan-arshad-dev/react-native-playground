import { useState } from 'react';
import { sculptureList } from './data';

export default function InteractiveEvents() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <button className="action-button" onClick={onClick}>
            {children}
        </button>
    );
}


// Hooks
// Hooks are special functions that are only available while React is rendering 
// (which we’ll get into in more detail on the next page). They let you 
// “hook into” different React features.
// can only be called at the top level of your components or your own Hooks.
//  You can’t call Hooks inside conditions, loops, or other nested functions. 
// Hooks are functions, but it’s helpful to think of them as unconditional declarations 
// about your component’s needs.


// State: a component’s memory 
// The useState Hook provides those two things:
//
// A state variable to retain the data between renders.
// A state setter function to update the variable and trigger React to render the component again.

export function Gallery() {
    // The [ and ] syntax here is called array destructuring and 
    // it lets you read values from an array. The array returned 
    // by useState always has exactly two items.
    const [index, setIndex] = useState(0);  // State can hold any kind of JavaScript value, including objects 
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            // State as a snapshot didn't update the state variable instantly triggers a re-render
            // React's useState hook is not inherently asynchronous. but effect of calling the setter is asynchronous.
            // When you call a useState setter, React schedules a state update and a re-render of the component.
            // if you try to access the state variable immediately after calling its setter function, 
            // you might not see the updated value because the actual state update and re-render have not yet occurred.
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <br />
            <br />
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

// State as a snapshot 
export function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {  // Every render has its own event handlers.
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br />
            <br />
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Send</button>
        </form>
    );
}

// Queueing a series of state updates 
export function Counter() {
    const [score, setScore] = useState(0);

    function increment() {
        // setScore(score + 1);    // didn't update the state variable instantly triggers a re-render/
        // fix => uses latest state value (safe for multiple updates => Updater function).
        // React adds that function to its queue
        // Functional Update where `s` is paramter and get previously set value.
        // pass a function React gives that function the latest state value
        // This ensures each update uses the most recent state, even if multiple updates are queued.
        setScore(s => s + 1)
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();    // score -> 0
                increment();    // score -> 0 cuz value of the score state variable will be update on re-render.
                increment();    // score -> 0
            }}>+3</button>
            <h1>Score: {score}</h1>
        </>
    )
}

// Event propagation 
// If you click on either button, its onClick will run first, 
// followed by the parent <div>’s onClick. So two messages will appear. 
// If you click the toolbar itself, only the parent <div>’s onClick will run.
export function ToolbarEvent() {
    return (
        <div
            className="toolbar"
            onClick={() => {
                alert('You clicked on the toolbar!');
            }}
            // In rare cases, you might need to catch all events on child elements, even if they stopped propagation. Like for analytics purpose
            onClickCapture={() => { /* this runs first */ }}
        >
            <button className='action-button'
                onClick={(e) => {
                    // Since the propagation was stopped, the parent <div>’s onClick handler does not run.
                    // stops the event handlers attached to the tags above from firing.
                    e.stopPropagation();    // to stop propagation (preventing the event from bubbling further).
                    alert('Playing!');
                }}>
                Play Movie
            </button>
            <button className='action-button'
                onClick={
                    (e) => {
                        e.stopPropagation();
                        alert('Uploading!');
                    }}>
                Upload Image
            </button>
        </div>
    );
}

// Preventing default behavior 
export function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

// Updating Objects in State
export function FormFill() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,  // shallow copy cuz only copies things one level deep
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return (
        <>
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}

// Using a single event handler for multiple fields
export function FormFillX() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <h1>Using a single event handler for multiple fields</h1>
            <label>
                First name:
                <input
                    name="firstName"    // mendatory and should be same as property name.
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                <input
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}


