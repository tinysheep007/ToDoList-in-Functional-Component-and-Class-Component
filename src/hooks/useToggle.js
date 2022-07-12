import React, { useState } from "react";
export default function useToggle(t = false) {

    let [toggle, setToggle] = useState(t);
    const changeToggle = () => (
        setToggle(!toggle)
    )
        return [toggle, changeToggle];
}


