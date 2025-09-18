// Conditionally returning JSX 
function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✅</li>; // can return null, (null will won't render anything)
    }
    return <li className="item">{name}</li>;
}

// Conditional (ternary) operator (? :)
function Item1({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? name + ' ✅' : name}
        </li>
    );
}

function Item2({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + ' ✅'}
                </del>
            ) : (
                name
            )}
        </li>
    );
}

// Logical AND operator (&&) 
function Item3({ name, isPacked }) {
    const messageCount = 0
    return (
        <>
            <li className="item">
                {name} {isPacked && '✅'}
            </li>
            {messageCount &&    // will render to to fix this use `messageCount > 0` as condition
                <li className="item">
                    New messages
                </li>}
        </>
    );
}

// if condition works not only for text, but for arbitrary JSX too
function Item4({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = ( // parentheses will user to represent the component in JSX
            <del>
                {name + " ✅"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}


export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item1
                    isPacked={false}
                    name="Photo of Tam1"
                />
                <Item2
                    isPacked={true}
                    name="Photo of Tam2"
                />
                <Item2
                    isPacked={false}
                    name="Photo of Tam2"
                />
                <Item3
                    isPacked={false}
                    name="Photo of Tam3"
                />
                <Item3
                    isPacked={true}
                    name="Photo of Tam3"
                />

                <Item4
                    isPacked={false}
                    name="Photo of Tam4"
                />
                <Item4
                    isPacked={true}
                    name="Photo of Tam4"
                />
            </ul>
        </section>
    );
}
