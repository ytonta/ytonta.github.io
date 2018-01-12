import { createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'
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
