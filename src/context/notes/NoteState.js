import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const dummyNotes = [
        {
          "_id": "62e90bf0ea21baa91d6c432d",
          "user": "62de5e2bd6e3364ec99611e3",
          "title": "birthday",
          "description": "happy birthday",
          "tag": "General",
          "date": "2022-08-02T11:35:12.471Z",
          "__v": 0
        },
        {
          "_id": "62e90bffea21baa91d6c4332",
          "user": "62de5e2bd6e3364ec99611e3",
          "title": "greetings",
          "description": "good morning",
          "tag": "General",
          "date": "2022-08-02T11:35:27.323Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(dummyNotes)
    return (
        <NoteContext.Provider value={{notes, setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;