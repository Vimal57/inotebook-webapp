import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "vimal",
        "class": "9th",
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Rudra",
                "class": "1th",
            })
        }, 2000);
    }
    return (
        <NoteContext.Provider value={{state, update}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;