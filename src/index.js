/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const events = [{start: 30, end: 120}, {start: 300, end: 330}, {start: 290, end: 330}]

/**
 * Render the app with the supplied events.
 * @param {array} events The events to display.
 */
window.renderDay = function renderDay(events) {
  ReactDOM.render(<App events={events} />, document.getElementById('root'));
};
