import React, {Component} from 'react';

export default class IdeaForm extends Component {
  constructor() {
    super();
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

  createIdea() {
    const idea = {
      title: this.state.titleInput,
      body: this.state.bodyInput,
      id: Date.now(),
      quality: 'swill'
    };

    // dispatch(addIdea(idea));
  }

  render() {
    return (
      <form>
        <h1>reduxbox</h1>
        <input 
          className="title-input" 
          type="text"
          value={this.state.titleInput}
          onChange={event => this.updateTitleInput(event)}
        />
        <input 
          className="body-input" 
          type="text" 
          value={this.state.bodyInput}
          onChange={event => this.updateBodyInput(event)}
        />
        <button 
          className="saveBtn"
          disabled={this.state.isDisabled}
          onClick={() => createIdea()}
        >
          save
        </button>
      </form>
    );
  }
}