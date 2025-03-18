import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]); // For array of tasks
    let [newTodo, setNewTodo] = useState(""); // For new task

    // Finalize task storage after button click
    let addNewTask = () => {
        setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    };

    // Store input value
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                isDone: true,
            }))
        );
    };

    let MarkAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: true }
                    : todo
            )
        );
    };

    
    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />

            <h4>Todo List</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => MarkAsDone(todo.id)}>MARK AS DONE</button>
                    </li>
                ))}
            </ul>

            <br />
            <button onClick={markAllAsDone}>MARK ALL AS DONE</button>
        </div>
    );
}
