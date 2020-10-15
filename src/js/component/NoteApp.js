import React, { useState } from "react";
import PropTypes from "prop-types";

const NoteApp = props => {
	const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    
    const removeNote = title => {
        setNotes( notes.filter( note => note.title !== title));
    };
    const addNote = e => {
        e.preventDefault();
        setNotes([
        ...notes,
        {
            title
        }
        ]);
        setTitle("");
    };
	return (
		<div>
			<h1>Notes</h1>
			<p>
				<strong>Add Notes</strong>
			</p>
			<form onSubmit={}>
				<input value={title} onChange={e => setTitle(e.target.value)} />
				<button>Add Note</button>
			</form>
			<hr width="100%" />

			{notes.map((note, index) => {
				<div>
					<h3>
						{note.title} &nbsp; &nbsp;
						<button onClick = { () => removeNote(note.title)}>X</button>
					</h3>
				</div>
			})}
		</div>
	);
};

note.PropTypes

export { NoteApp as default };
