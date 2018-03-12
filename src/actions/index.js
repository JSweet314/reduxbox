export const addIdea = (idea) => {
  return {
    type: 'ADD_IDEA',
    idea
  };
};

export const removeIdea = (id) => {
  return {
    type: 'REMOVE_IDEA',
    id
  };
};

export const increaseQuality = (id) => {
  return {
    type: 'INCREASE_QUALITY',
    id
  };
};

export const decreaseQuality = (id) => {
  return {
    type: 'DECREASE_QUALITY',
    id
  };
};

export const retrieveFromStorage = (ideas) => {
  return {
    type: 'RETRIEVE_FROM_LOCAL_STORAGE',
    ideas
  };
};

export const searchIdeas = (searchValue) => {
  return {
    type: 'SEARCH_IDEAS',
    searchValue
  };
};
