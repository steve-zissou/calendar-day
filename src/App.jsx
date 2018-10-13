import PropTypes from 'prop-types';
import React from 'react';
import './App.css';

export default class App extends React.PureComponent {
  render() {
    const { events } = this.props;
    return (
      <ul className="App">
        {events.map(item => <li>{`${item.start} -> ${item.end}`}</li>)}
      </ul>
    );
  }
}

App.defaultProps = {
  events: [],
};

App.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    end: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
  })),
};
