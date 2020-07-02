import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        {this.props.id}
      </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired
};

export default Contest;