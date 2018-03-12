import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterQuality} from '../actions/index';
import '../styles/QualitySelect.css';

const QualitySelect = ({filterQuality}) => {
  return (
    <div className="quality-select">Quality: 
      <select 
        name="quality"
        id="select"
        onChange={(e) => filterQuality(e.target.value)}>
        <option value="all">all</option>
        <option value="swill">swill</option>
        <option value="plausible">plausible</option>
        <option value="genius">genius</option>
      </select>
    </div>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({filterQuality}, dispatch);
};

export default connect(null, matchDispatchToProps)(QualitySelect);