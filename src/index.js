/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v1';

import './index.css';

import App from './App';

// const events = [{start: 30, end: 120}, {start: 300, end: 330}, {start: 290, end: 330}]

/**
 * Render the app with the supplied events.
 * @param {array} events The events to display.
 */
window.renderDay = function renderDay(events) {
  const uuidEvents = events.map(item => Object.assign({}, item, { uuid: uuid() }));
  ReactDOM.render(<App events={uuidEvents} />, document.getElementById('root'));
};
