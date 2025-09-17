import { Profile } from "./Profile.jsx"
export function Intro() {
    return (
        <>  // called fragment let you group things without leaving any trace in the browser HTML tree.
            <div>React Playground</div>
            <p>Hi! this is Katherine Johnson.</p>
            <Profile />
            <Profile />
        </>
    )
};
