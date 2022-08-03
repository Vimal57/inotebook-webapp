import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

function Notes() {
	const context = useContext(noteContext);
	const { notes, getNotes } = context;
	useEffect(() => {
		getNotes()
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<AddNote />
			<h1>Your Notes</h1>
			<div className="row my-3">
				{notes.map((note) => {
					return <Noteitem key={note._id} note={note} />;
				})}
			</div>
		</>
	);
}

export default Notes;
