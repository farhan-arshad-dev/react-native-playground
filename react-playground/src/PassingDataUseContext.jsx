/*
    The problem with passing props
    Passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree.
    The nearest common ancestor could be far removed from the components that need data, 
    and lifting state up that high can lead to a situation called “prop drilling”.
*/

import { useContext } from 'react';
import { LevelContext } from './data';

export default function PageContext() {
    return (
        <Section level={1}>
            <Heading>Title</Heading>
            <Section level={2}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section level={3}>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Section level={4}>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}

function Section({ level, children }) {
    return (
        <section className="section">
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
    );
}

export function Heading({ children }) {
    const level = useContext(LevelContext);
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

