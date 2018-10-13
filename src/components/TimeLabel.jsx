import PropTypes from 'prop-types';
import React from 'react';

import './TimeLabel.css';

export default class TimeLabel extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div id="timelabel">
        {text}
      </div>
    );
  }
}

TimeLabel.defaultProps = {
  text: '',
};

TimeLabel.propTypes = {
  text: PropTypes.string,
};
