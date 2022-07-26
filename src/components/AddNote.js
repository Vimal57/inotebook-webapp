import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NoteContext';

function AddNote(props) {
	const context = useContext(noteContext);
	const { createNote } = context;
	const [note, setNote] = useState({ title: '', description: '', tag: '' });
	const handleClick = (e) => {
		e.preventDefault();
		createNote(note.title, note.description, note.tag, props.showAlert);
		setNote({ title: '', description: '', tag: '' });
	};
	const onChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	return (
		<div className="container my-3">
			<h1>Add a Note</h1>
			<form className="my-3">
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						name="title"
						aria-describedby="emailHelp"
						onChange={onChange}
						value={note.title}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
						name="description"
						onChange={onChange}
						value={note.description}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="tag" className="form-label">
						Tag
					</label>
					<input
						type="text"
						className="form-control"
						id="tag"
						name="tag"
						onChange={onChange}
						value={note.tag}
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleClick}>
					Add Note
				</button>
			</form>
		</div>
	);
}

export default AddNote;
