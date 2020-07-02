import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({contests, onContestClick}) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId => 
      <ContestPreview
        onClick={onContestClick}
        key={contestId}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;