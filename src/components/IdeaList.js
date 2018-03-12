import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IdeaCard from './IdeaCard';
import QualitySelect from './QualitySelect';
import {searchIdeas} from '../actions/index';
import '../styles/IdeaList.css';

const IdeaList = ({searchValue,qualityFilter, searchIdeas, ideas}) => {
  return (
    <div className="card-container">
      <input
        className='search'
        type='search'
        placeholder='SEARCH'
        value={searchValue}
        onChange={(e) => searchIdeas(e.target.value)}
      />
      <QualitySelect />
      {
        ideas.map(idea => {
          const containsSearchValue = (idea.title.includes(searchValue)
            || idea.body.includes(searchValue)) 
            && idea.quality.includes(qualityFilter);

          if (containsSearchValue) {
            return (
              <IdeaCard key={idea.id} {...idea} />
            );
          }
          return null;
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
    searchValue: state.searchValue,
    qualityFilter: state.qualityFilter
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({searchIdeas}, dispatch)
};

IdeaList.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchIdeas: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(IdeaList);