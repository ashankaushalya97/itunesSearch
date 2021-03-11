import {combineReducers} from 'redux';

import mediaReducer from '../features/Media/reducer';

const rootReducer = combineReducers({
  mediaReducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};

export default appReducer;
