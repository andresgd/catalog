import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.css';
import Router from './components/App/Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();