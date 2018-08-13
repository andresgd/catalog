import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.css';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBars, faFolder, faWrench } from '@fortawesome/free-solid-svg-icons';

library.add([faLaptop, faBars, faFolder, faWrench]);

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();