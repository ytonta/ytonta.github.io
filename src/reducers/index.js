import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
  about: (state = {}) => state,
  skills: (state = {}) => state,
  experience: (state = {}) => state,
  education: (state = {}) => state,
  achievements: (state = {}) => state,
  hobbies: (state = {}) => state,
});

export default rootReducer;
