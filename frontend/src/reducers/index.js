import { combineReducers } from 'redux';
import { LOAD_ALL_NOTES, UPDATE_NOTE, CREATE_NOTE } from '../actions';

const notes = (state = { allNotes: [], displayedNote: null }, action) => {
	switch(action.type) {
	case LOAD_ALL_NOTES:
		state = Object.assign({},
			state,
			{
				allNotes: action.payload
			}
		);
		return state;

	case CREATE_NOTE:
		let newNote = action.newNote;
		let oldState = state.allNotes.slice(0);
		state = Object.assign({},
			state,
			{
				allNotes: [newNote, ...oldState]
			}
		);
		return state;
	case UPDATE_NOTE:
		console.log('updated:', action.updated_note.title);
		let updatedNoteId = action.updated_note._id;
		let locateOutDatedNote = state.allNotes.find((n) => {
			return n._id === updatedNoteId;
		});
		let updatedNote = action.updated_note;
		let currentNotesState = state.allNotes.slice(0);
		const savedNotes = [
			...currentNotesState.slice(0, currentNotesState.indexOf(locateOutDatedNote)),
			updatedNote,
			...currentNotesState.slice(currentNotesState.indexOf(locateOutDatedNote) + 1)
		];
		state = Object.assign({},
			state,
			{
				allNotes: savedNotes
			}
		);
		return state;

	default:
		return state;

	}

};

const rootReducer = combineReducers({
	notes
	// ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
