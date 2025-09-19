import Profile from "./Profile.jsx"

const today = new Date();

function formatDate(date) { // its a JS function
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList() {
    return (
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
        }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    );
}

function Card({ children }) {       // here children prop is reserved to accept the child view 
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Intro() {
    const person = {
        name: "Katherine Johnson",
        imageUrl: "https://i.imgur.com/cAnAEB8.jpeg"
    }

    return (
        // called fragment let you group things without leaving any trace in the browser HTML tree.
        <>
            <div style={person.theme}>React Playground</div>
            <p>Hi! this is {person.name}.</p>
            <p>Hi! this is {person.name}.</p>
            <h1>To Do List for {formatDate(today)}</h1>
            <Card>
                <Profile person={person} />
            </Card>
            <Profile
                size={75}
                person={{
                    name: "Katherine Johnson",
                    imageUrl: "https://i.imgur.com/cAnAEB8.jpeg"
                }} />
            <Profile
                size={50}
                person={{
                    name: "Katherine Johnson",
                    imageUrl: "https://i.imgur.com/cAnAEB8.jpeg"
                }} />
            <TodoList />
        </>
    )
};
