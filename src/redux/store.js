import { createStore, combineReducers } from 'redux';
import initialState from './InitialState';
import postsReducer from './postsRedux';
import catagoriesReducer from './categoriesRedux';

const subreducers = {
  posts: postsReducer,
  categories: catagoriesReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
