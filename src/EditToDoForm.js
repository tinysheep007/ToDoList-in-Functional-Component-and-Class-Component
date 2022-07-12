import { toggleButtonClasses } from "@mui/material";
import React, { useState } from "react";
import useInputHooks from "./hooks/userInputHooks";

export default function EditToDoForm(props) {
    let { id, todo } = props;

    const [newItem, handleChange, reset] = useInputHooks(todo);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.editTodo(id, newItem);
                reset();
                props.toggle();
            }}>

                <input value={newItem} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}