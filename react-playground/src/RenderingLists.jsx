import { Fragment } from "react/jsx-runtime";

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
    const listItems = people.map((person, index) =>
        <li key={index}>{person}</li>
    );
    return <ul>{listItems}</ul>;
}

const professors = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

export function ShowChemistListBullets() {
    const chemists = professors.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map((person, index) =>    // Implicit return! with Curly brace need to add return statment.
        <li key={index}>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </li>
    );
    return <ul>{listItems}</ul>;
}


export function ShowChemistList() {
    const chemists = professors.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map((person, index) =>
        // don’t index specify a key  the order in which you render items will
        // change over time if an item is inserted, deleted, or if the array gets reordered.
        // components won’t receive key as a prop. It’s only used as a hint by React itself. 
        // If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.
        <Fragment key={index}>
            <span>{person.name}</span>
            <br />
        </Fragment>
    );
    return <>{listItems}</>;
}

// Displaying several DOM nodes for each list item 

/*
What do you do when each item needs to render not one, but several DOM nodes?

The short <>...</> Fragment syntax won’t let you pass a key, so you need to either group them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax:

import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
Fragments disappear from the DOM, so this will produce a flat list of <h1>, <p>, <h1>, <p>, and so on.

*/

/*
List with a separator 
This example renders a famous haiku by Tachibana Hokushi, 
with each line wrapped in a <p> tag. Your job is to insert an
<hr /> separator between each paragraph. Your resulting structure should look like this:
*/

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export function Poem() {
    return (
        <article>
            {poem.lines.map((line, i) =>
                <Fragment key={i}>
                    {i > 0 && <hr />}
                    <p>{line}</p>
                </Fragment>
            )}
        </article>
    );
}

