/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.css';


/**
 * Render the app with the supplied events.
 * @param {array} events The events to display.
 * @returns {string}
 */
window.renderDay = function renderDay(events) {
  ReactDOM.render(<App events={events} />, document.getElementById('root'));
  return 'Calendar updated';
};

ReactDOM.render(<App />, document.getElementById('root'));
