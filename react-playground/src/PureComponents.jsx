let guest = 0;

/*
Changed a preexisting variable while rendering. This is often called a “mutation” to make it sound a bit scarier.

Pure functions don’t mutate variables outside of the function’s scope
or objects that were created before the call—that makes them impure!
*/
function Cup() {
    // Bad: changing a preexisting variable!
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    );
}

function Cup1({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaGatheringPure() {
    const cups = [];
    for (let i = 1; i <= 12; i++) {
        cups.push(<Cup1 key={i} guest={i} />);
    }
    return cups;
}

/*
 it’s fine because you’ve created them during the same render, 
 inside TeaGathering. No code outside of TeaGathering will ever know 
 that this happened. This is called “local mutation”—it’s like your 
 component’s little secret.

 With pure function we can improve performance by skipping rendering components whose inputs have not changed.
 This is safe because pure functions always return the same results, so they are safe to cache.
 Every new React feature we’re building takes advantage of purity. From data fetching to animations 
 to performance, keeping components pure unlocks the power of the React paradigm.
*/
