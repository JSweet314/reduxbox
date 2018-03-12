import {combineReducers} from 'redux';

const ideas = (state = [], action) => {
  switch (action.type) {
  case 'ADD_IDEA':
    return [
      action.idea,
      ...state
    ];
  case 'REMOVE_IDEA':
    return state.filter(idea => idea.id !== action.id);
  case 'INCREASE_QUALITY':
    return state.map(idea => {
      if (idea.id === action.id) {
        idea.quality = idea.quality === 'swill' ? 'plausible' : 'genius';
        return idea;
      }
      return idea;
    });
  case 'DECREASE_QUALITY':
    return state.map(idea => {
      if (idea.id === action.id) {
        idea.quality = idea.quality === 'genius' ? 'plausible' : 'swill';
        return idea;
      }
      return idea;
    });
  case 'RETRIEVE_FROM_LOCAL_STORAGE':
    return action.ideas;
  default:
    return state;
  }
};

const searchValue = (state = '', action) => {
  switch (action.type) {
  case 'SEARCH_IDEAS':
    return action.searchValue;
  default:
    return state;
  }
};

const qualityFilter = (state = '', action) => {
  switch (action.type) {
  case 'FILTER_QUALITY':
    if (action.quality === 'all') {
      return '';
    }
    return action.quality;
  default:
    return state;
  }
};

const allReducers = combineReducers({ideas, searchValue, qualityFilter});

export default allReducers;