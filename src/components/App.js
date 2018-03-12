import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IdeaForm from '../containers/IdeaForm.js';
import IdeaList from '../components/IdeaList.js';
import {retrieveFromStorage} from '../actions/index';
import PropTypes from 'prop-types';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.retrieveFromStorage = props.retrieveFromStorage;
  }

  componentDidMount() {
    let ideas;
    const previousBox = localStorage.getItem('reduxbox');

    if (previousBox) {
      ideas = JSON.parse(previousBox);
      this.retrieveFromStorage(ideas);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('reduxbox', JSON.stringify(this.props.ideas));
  }
  
  render() {
    return (
      <div className="app">
        <IdeaForm />
        <IdeaList />
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({retrieveFromStorage}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  };
};

App.propTypes = {
  retrieveFromStorage: PropTypes.func.isRequired,
  ideas: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
