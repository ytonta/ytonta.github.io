import { createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';
import profile from './data/profile';
import about from './data/about';
import skills from './data/skills';
import experience from './data/experience';
import education from './data/education';
import achievements from './data/achievements';
import hobbies from './data/hobbies';

const defaultState = {
  profile,
  about,
  skills,
  experience,
  education,
  achievements,
  hobbies,
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = createHistory();

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
