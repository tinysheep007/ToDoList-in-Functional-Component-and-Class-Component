import React, { useState } from "react"
import TodoItem from "./TodoItem"
export default function TodoList(props) {
    return (
        <div>
            {
                props.todos.map((todo, i) => (

                    <TodoItem ket={i}
                        todo={todo.todo}
                        completed={todo.completed}
                        id={todo.id}
                        removeTodo = {props.removeTodo} 
                        toggleTodo = {props.toggleTodo}
                    />


                ))
            }
        </div>
    )
}