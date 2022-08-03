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
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMzkyZjEzNmZlNmQzZGNlNWVlOGU0In0sImlhdCI6MTY1OTM0MTgyMH0.eHRFO1SsCGEtCFvHp_fIoqEb0_dZYO7YHpy9VgvQJvA',
			},
		});

		const json = await response.json();
		setNotes(json.data);
	};

	// Create Note
	const createNote = async (title, description, tag) => {
		console.log('create note');
		const response = await fetch(`${host}/note/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMzkyZjEzNmZlNmQzZGNlNWVlOGU0In0sImlhdCI6MTY1OTM0MTgyMH0.eHRFO1SsCGEtCFvHp_fIoqEb0_dZYO7YHpy9VgvQJvA',
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		if (!json.errors) {
			setNotes(
				notes.concat(json.data)
			);
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
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMzkyZjEzNmZlNmQzZGNlNWVlOGU0In0sImlhdCI6MTY1OTM0MTgyMH0.eHRFO1SsCGEtCFvHp_fIoqEb0_dZYO7YHpy9VgvQJvA',
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
	const deleteNote = async (id) => {
		console.log('delete note');
		const response = await fetch(`${host}/note/delete/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMzkyZjEzNmZlNmQzZGNlNWVlOGU0In0sImlhdCI6MTY1OTM0MTgyMH0.eHRFO1SsCGEtCFvHp_fIoqEb0_dZYO7YHpy9VgvQJvA',
			}
		});
		const json = await response.json();
		if (json.data.notes) {
			setNotes(json.data.notes);
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
