import PropTypes from 'prop-types';
import React from 'react';

export default class Event extends React.PureComponent {
  render() {
    const { end, start } = this.props;
    return (
      <li>{`${start} -> ${end}`}</li>
    );
  }
}

Event.defaultProps = {
  end: 30,
  start: 0,
};

Event.propTypes = {
  end: PropTypes.number,
  start: PropTypes.number,
};
