import React, { useState } from "react";
import useToggle from "./hooks/useToggle";
import { Checkbox } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import './css/TodoItem.css';
import EditToDoForm from "./EditToDoForm";

export default function TodoItem(props) {

    const [isEdit, toggle] = useToggle(false);

    let { key, id, todo, completed, removeTodo, toggleTodo } = props;

    return (
        <div style={{ border: "5px solid", marginBottom: "5px" }}>
            {isEdit ? (<EditToDoForm editTodo={props.editTodo} id={id} toggle={toggle} todo={todo}/>) : (
                <div>
                    <div>
                        {id}
                    </div>

                    <div style={{ textDecoration: completed ? "line-through" : null }}>
                        {todo}
                    </div>
                    <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
                    <div>
                        <Delete className="delete" onClick={() => removeTodo(id)} />
                        <Edit className="edit" onClick={toggle} />
                    </div>
                </div>)}


        </div>
    )
}