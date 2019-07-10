export const LOAD_ALL_NOTES = 'LOAD_ALL_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';

export function loadAllNotes() {
	return(dispatch) => {
		fetch('http://localhost:3001/get_notes')
			.then(response => response.json())
			.then(json => dispatch({
				type: LOAD_ALL_NOTES,
				payload: json
			}));
	};
}

export function createNote(noteTitle, noteContent) {
	return (dispatch) => {
		fetch('http://localhost:3001/add_note',
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}, body: JSON.stringify({
					title: noteTitle,
					content: noteContent
				})
			})
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: CREATE_NOTE,
					newNote: json
				});
			});
	};
}

export function updateNote(note_id, note_title, note_content) {
	console.log('note_id:', note_id);
	return (dispatch) => {
		fetch('http://localhost:3001/update_note',
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					id: note_id,
					title: note_title,
					content: note_content
				})
			})
			.then(response => response.json())
			.then(json => dispatch({
				type: UPDATE_NOTE,
				updated_note: json
			}));
	};
}
