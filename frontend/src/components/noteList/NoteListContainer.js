import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'
import NoteListItem from './NoteListItem'

class NoteListContainer extends React.Component {

  componentDidMount() {
    this.props.loadAllNotes();
  }

  	componentDidUpdate(prevProps, prevState) {
      if (prevProps !== this.props) {
        this.listAllNotes();
      }

    }

  listAllNotes = () => {
    return this.props.notes.map((note) => {
      return <NoteListItem selectNote={this.props.selectNote} id={note.id} note={note}/>
    })
  };

  render() {
    return(
      <div className="noteListContainer">
        <div className="note-list-header">
            <span>New Note</span>
            <button onClick={this.props.selectNote} id="new"> + </button>
        </div>
        {this.props.notes.length > 0 ?
          <div className="note-list">
              {this.listAllNotes()}
          </div>
        : "I can't find anything :("}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    notes: state.notes.allNotes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer)
