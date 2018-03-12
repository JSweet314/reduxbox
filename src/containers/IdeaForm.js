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
      isDisabled: true
    };
  }

  updateTitleInput(event) {
    const waitingForUserInput = event.target.value && this.state.bodyInput;

    this.setState({
      titleInput: event.target.value,
      isDisabled: !waitingForUserInput
    });
  }

  updateBodyInput(event) {
    const waitingForUserInput = event.target.value && this.state.titleInput;

    this.setState({
      bodyInput: event.target.value,
      isDisabled: !waitingForUserInput
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
          value={this.state.titleInput}
          onChange={event => this.updateTitleInput(event)}
        />
        <input 
          className="body-input" 
          type="text" 
          placeholder="body"
          value={this.state.bodyInput}
          onChange={event => this.updateBodyInput(event)}
        />
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
    ideas: state.ideas
  };
};

IdeaForm.propTypes = {
  addIdea: PropTypes.func.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(IdeaForm);