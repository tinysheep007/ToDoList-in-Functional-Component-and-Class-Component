import React from "react";
import { Checkbox } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import './css/TodoItem.css';

export default function TodoItem(props){
    let {id, todo, completed, removeTodo, toggleTodo} = props;
    return (
        <div style={{border:"5px solid",marginBottom:"5px"}}>
            <div>
                {id}
            </div>
            
            <div style={{textDecoration: completed ? "line-through" : null}}>
                {todo}
            </div>
            <Checkbox checked={completed} onClick={()=>toggleTodo(id)}/>
            <div>
                <Delete className="delete" onClick={()=>removeTodo(id)}/>
                <Edit className="edit"/>
            </div>
            
        </div>
    )
}