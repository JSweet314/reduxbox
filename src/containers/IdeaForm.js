import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addIdea} from '../actions/index';
import PropTypes from 'prop-types';
import '../styles/IdeaForm.css';


class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      bodyInput: '',
      isDisabled: true,
      titleChars: 120,
      bodyChars: 120
    };
  }

  updateTitleInput(event) {
    const waitingForUserInput = event.target.value && this.state.bodyInput;

    this.setState({
      titleInput: event.target.value,
      isDisabled: !waitingForUserInput,
      titleChars: 120 - event.target.value.length
    });
  }

  updateBodyInput(event) {
    const waitingForUserInput = event.target.value && this.state.titleInput;

    this.setState({
      bodyInput: event.target.value,
      isDisabled: !waitingForUserInput,
      bodyChars: 120 - event.target.value.length
    });
  }

  createIdea(event) {
    event.preventDefault();
    const idea = {
      title: this.state.titleInput,
      body: this.state.bodyInput,
      id: Date.now(),
      quality: 'swill'
    };

    const ideas = [idea, ...this.props.ideas];

    localStorage.setItem('reduxbox', JSON.stringify(ideas));

    this.props.addIdea(idea);
    this.setState({
      titleInput: '',
      bodyInput: '',
      isDisabled: true
    });
  }

  render() {
    return (
      <form>
        <h1><span>redux</span>box</h1>
        <input 
          className="title-input" 
          type="text"
          placeholder="title"
          maxLength="120"
          value={this.state.titleInput}
          onChange={event => this.updateTitleInput(event)}
        />
        <p>Characters remaining: {this.state.titleChars}</p>
        <input 
          className="body-input" 
          type="text" 
          placeholder="body"
          maxLength="120"
          value={this.state.bodyInput}
          onChange={event => this.updateBodyInput(event)}
        />
        <p>Characters remaining: {this.state.bodyChars}</p>
        <button 
          className="saveBtn"
          disabled={this.state.isDisabled}
          onClick={(event) => this.createIdea(event)}
        >
          save
        </button>
      </form>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addIdea}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
  };
};

IdeaForm.propTypes = {
  addIdea: PropTypes.func.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(IdeaForm);