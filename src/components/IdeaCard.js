import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeIdea, increaseQuality, decreaseQuality } from '../actions/index';
import PropTypes from 'prop-types';
import '../styles/IdeaCard.css';

const IdeaCard = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <button 
        className="deleteBtn"
        onClick={() => props.removeIdea(props.id)}>
        <span aria-label="delete button" role="img">❌</span> 
      </button>
      <p>{props.body}</p>
      <p>
        <button 
          className="upVoteBtn"
          onClick={() => props.increaseQuality(props.id)}>
          <span aria-label="upvote button" role="img">👍</span>
        </button>
        <button
          className="downVoteBtn"
          onClick={() => props.decreaseQuality(props.id)}>
          <span aria-label="downvote button" role="img" >👎</span> 
        </button>
        <b>Quality:</b> {props.quality}
      </p>
    </article>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {removeIdea, increaseQuality, decreaseQuality},
    dispatch
  );
};

IdeaCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
  removeIdea: PropTypes.func.isRequired,
  increaseQuality: PropTypes.func.isRequired,
  decreaseQuality: PropTypes.func.isRequired
};


export default connect(null, matchDispatchToProps)(IdeaCard);