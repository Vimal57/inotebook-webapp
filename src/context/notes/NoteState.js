import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
	const dummyNotes = [
		{
			_id: '62e90bf0ea21baa91d6c432d1',
			user: '62de5e2bd6e3364ec99611e3',
			title: 'birthday',
			description: 'happy birthday',
			tag: 'General',
			date: '2022-08-02T11:35:12.471Z',
			__v: 0,
		},
		{
			_id: '62e90bffea21baa91d6c43322',
			user: '62de5e2bd6e3364ec99611e3',
			title: 'greetings',
			description: 'good morning',
			tag: 'General',
			date: '2022-08-02T11:35:27.323Z',
			__v: 0,
		},
		{
			_id: '62e90bf0ea21baa91d6c432v3',
			user: '62de5e2bd6e3364ec99611e3',
			title: 'birthday',
			description: 'happy birthday',
			tag: 'General',
			date: '2022-08-02T11:35:12.471Z',
			__v: 0,
		},
		{
			_id: '62e90bffea21baa91d6c433v4',
			user: '62de5e2bd6e3364ec99611e3',
			title: 'greetings',
			description: 'good morning',
			tag: 'General',
			date: '2022-08-02T11:35:27.323Z',
			__v: 0,
		},
		{
			_id: '62e90bf0ea21baa91d6c432t5',
			user: '62de5e2bd6e3364ec99611e3',
			title: 'birthday',
			description: 'happy birthday',
			tag: 'General',
			date: '2022-08-02T11:35:12.471Z',
			__v: 0,
		},
		{
			_id: '62e90bffea21baa91d6c433t6',
			user: '62de5e2bd6e3364ec99611e3',
			title: 'greetings',
			description: 'good morning',
			tag: 'General',
			date: '2022-08-02T11:35:27.323Z',
			__v: 0,
		},
	];
	const [notes, setNotes] = useState(dummyNotes);

	// Create Note
	const createNote = (title, description, tag) => {
		// TODO api call
		console.log('create note');
		setNotes(
			notes.concat({
				title,
				description,
				tag,
			})
		);
	};

	// Edit Note
	const editNote = () => {};

	// Delete Note
	const deleteNote = (id) => {
    // TODO api call
    console.log("delete note :: ", id);
    const newNotes = notes.filter(note => note._id !== id);
    setNotes(newNotes);
  };
	return (
		<NoteContext.Provider value={{ notes, createNote, editNote, deleteNote }}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
