import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
	const host = 'http://localhost:5000';
	const [notes, setNotes] = useState([]);

	// Fetch Notes
	const getNotes = async () => {
		console.log('Fetching Notes');
		// API CALLING
		const response = await fetch(`${host}/note/get`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					localStorage.getItem("token"),
			},
		});

		const json = await response.json();
		setNotes(json.data);
	};

	// Create Note
	const createNote = async (title, description, tag, showAlert) => {
		console.log('create note');
		const response = await fetch(`${host}/note/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					localStorage.getItem("token"),
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		if (!json.errors) {
			setNotes(
				notes.concat(json.data)
			);
			showAlert("Note created successfully...", "success")
		}
	};

	// Edit Note
	const editNote = async (id, title, description, tag) => {
		console.log('edit note fired');
		// API CALLING
		const response = await fetch(`${host}/note/update/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					localStorage.getItem("token"),
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log('response from update :: ', json);

		// logic
		for (let i = 0; i < notes.length; i++) {
			const element = notes[i];
			if (element._id === id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		}
	};

	// Delete Note
	const deleteNote = async (id, alert) => {
		console.log('delete note');
		const response = await fetch(`${host}/note/delete/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					localStorage.getItem("token"),
			}
		});
		const json = await response.json();
		if (json.data.notes) {
			setNotes(json.data.notes);
			alert("Note deleted successfully...", "success");
		}
	};
	
	return (
		<NoteContext.Provider
			value={{ notes, getNotes, createNote, editNote, deleteNote }}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
