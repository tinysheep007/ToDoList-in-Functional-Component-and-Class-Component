import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const { v4: uuidv4 } = require('uuid');


export default function TodoApp() {

    const todos = JSON.parse(window.localStorage.getItem("todos") || [
        {
            id: uuidv4(), todo: "finish hw", completed: false
        },
        {
            id: uuidv4(), todo: "watch kasui chan", completed: true
        }
    ])

    let [todo, setTodo] = useState(todos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todo))
    }, [todo])

    const addToDo = (newTodo) => (
        setTodo([...todo, {
            id: uuidv4(),
            todo: newTodo,
            completed: false
        }])
    )

    const removeTodo = (todoID) => {
        let newTodo = todo.filter((todo) => todo.id !== todoID)
        setTodo(newTodo)
    }

    const toggleTodo = (id) => {
        const newTodo = todo.map((t) => (
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
        setTodo(newTodo);
    }

    const editTodo = (id, editedTodo) => {
        const newTodo = todo.map((t) => (
            t.id === id ? { ...t, todo: editedTodo } : t
        ))
        setTodo(newTodo)
    }

    return (
        <div>
            functional component
            <TodoForm addToDo={addToDo} />
            <TodoList todos={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
    )
}