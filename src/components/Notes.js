import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';

function Notes() {
	const context = useContext(noteContext);
	const { notes, setNotes } = context;
	return (
		<>
			<h1>Your Notes</h1>
			<div className="row my-3">
				{notes.map((note) => {
					return <Noteitem note={note} />;
				})}
			</div>
		</>
	);
}

export default Notes;
