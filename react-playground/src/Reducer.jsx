/*
    Reducer => Consolidate all the state update logic outside your component in a single function, called “reducer”
    Your event handlers become concise because they only specify the user “actions”. At the bottom of the file, 
    the reducer function specifies how the state should update in response to each action!
    when to use reducer
    - if many event handlers modify state in a similar way.
    - Testing: A reducer is a pure function that doesn’t depend on your component. 
    This means that you can export and test it separately in isolation.
    - Also have useImmerReducer like useImmer (Alternative of useState)
*/

import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskListReducer.jsx';

export default function TaskAppReducer() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,   // If you want, you can even move the reducer method to a different file.
        initialTasks
    );

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <>
            <h1>Extracting state logic into a reducer </h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
];
