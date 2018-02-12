// import React from 'react';
// import { render } from 'react-dom';
// import 'sanitize.css/sanitize.css';
// import './styles/index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

// render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';

// import css
import 'sanitize.css/sanitize.css';

// import components
import App from './components/App';

// import react router deps
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import registerServiceWorker from './registerServiceWorker';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}></Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
registerServiceWorker();
