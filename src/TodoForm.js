import React from "react"
import useInputHooks from "./hooks/userInputHooks"
export default function TodoForm(props) {
    let [input, change, clear] = useInputHooks("");
    return (
        <div>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    props.addToDo(input);
                    clear();
            }}>
                <input placeholder="type something" value={input} onChange={change}></input>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}