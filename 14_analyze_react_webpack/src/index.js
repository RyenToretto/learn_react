import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import * as serviceWorker from './js/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// unregister() to register() ---- online slow TO offline and load faster
serviceWorker.register();
