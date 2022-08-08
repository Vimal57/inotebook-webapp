import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from "react-router-dom";

function Notes(props) {
	const context = useContext(noteContext);
	let navigate = useNavigate(); 
	const { notes, getNotes } = context;
	useEffect(() => {
		if (localStorage.getItem("token")) {
			getNotes();
		} else {
			navigate("/login");
		}
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<AddNote showAlert={props.showAlert}/>
			<h1>Your Notes</h1>
			<div className="row my-3">
				{notes.map((note) => {
					return <Noteitem key={note._id} note={note} showAlert={props.showAlert} />;
				})}
			</div>
		</>
	);
}

export default Notes;
