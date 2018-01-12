import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory'

// import the root reducer
import rootReducer from './reducers/index';

const defaultState = {

};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

export const history = createHistory();

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
