import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class NoteListItem extends React.Component {
	render() {
		console.log('note:', this.props.note);
		return(
			<div id={this.props.note._id} key={this.props.note._id} className="note-list-item" onClick={this.props.selectNote}>
				{this.props.note.title}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		notes: state.notes.allNotes,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListItem);
