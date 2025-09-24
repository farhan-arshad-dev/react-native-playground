
import { useMemo, useState } from 'react';

/*
    React Compiler can automatically memoize expensive calculations for you, eliminating the need for manual useMemo in many cases.
    `useMemo` is a React Hook that caches the result of a computation and recomputes it only when dependencies change.
    But useMemo blocks UI during calculation.
    export function TodoList({ todos, filter }) {
        const [newTodo, setNewTodo] = useState('');
        const visibleTodos = useMemo(() => {
            // ✅ Does not re-run unless todos or filter change
            return getFilteredTodos(todos, filter);
        }, [todos, filter]);
        // ...
    }
*/
function ExpensiveComponent({ number }) {
    // A fake heavy calculation
    function slowDouble(n) {
        console.log("Running slow calculation...");
        let start = performance.now();
        while (performance.now() - start < 1000) {
            // nothing to do
        } // block for 1s
        return n * 2;
    }

    // ✅ Cached with useMemo
    const doubled = useMemo(() => slowDouble(number), [number]);

    return <p>Double: {doubled}</p>;
}

export default function MemoApp() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Increment: {count}</button>
            <input value={text} onChange={e => setText(e.target.value)} />
            <ExpensiveComponent number={count} />
        </div>
    );
}
