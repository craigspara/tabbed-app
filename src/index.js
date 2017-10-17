import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateApi from './state-api/StateApi';
import { data } from './data';

import registerServiceWorker from './registerServiceWorker';

const store = new StateApi(data);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
