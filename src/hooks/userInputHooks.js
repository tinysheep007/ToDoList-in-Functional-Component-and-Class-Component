import React, { useState } from "react";
export default function useInputHooks(val = "") {
    let [input, setInput] = useState(val);
    const change = (e) => (
        setInput(e.target.value)
    )
    const clear = (e) => (
        setInput("")
    )
        return [input, change, clear];
}



