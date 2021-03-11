import {createSelector} from 'reselect';

const mediaReducer = (state) => state.mediaReducer;

export const getSearchData = createSelector(
  mediaReducer,
  (currentState) => currentState.searchData,
);
export const getSelectedData = createSelector(
  mediaReducer,
  (currentState) => currentState.selected,
);