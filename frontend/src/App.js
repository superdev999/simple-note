import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../src/actions'
import PageContainer from './components/PageContainer'
import NoteListContainer from './components/noteList/NoteListContainer'


class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			displayedNote: "new",
		}
	}

	componentDidMount() {
		this.setState({
			displayedNote: "new"
		})
	}

	componentDidUpdate(prevProps, prevState) {

		if (prevProps.notes.length != this.props.notes.length) {
			this.setState({
				displayedNote: "new"
			})
		}
	}

	selectNote = (event) => {

		const target_id = event.target.id
		let selected = '';
		if (target_id !== 'new') {
			selected =  this.props.notes.find((note) => {
				return note._id === target_id;
			})
		} else {
			selected = 'new';
		}
		this.setState({
			displayedNote: selected
		})

	};

  render() {
    return (
      <div className="App">
        <div className="pageComponents">
          <NoteListContainer selectNote={this.selectNote}/>
          <PageContainer displayedNote={this.state.displayedNote} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    notes: state.notes.allNotes,
		displayedNote: state.notes.displayedNote
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
