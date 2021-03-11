import {
  SAVE_DATA_SUCCESS,
  SAVE_DATA_FAIL,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
  SET_SELECTED_ITEM,
} from '../constants';

const initialState = {
  searchData: [],
  selected: null,
};

const MediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_SUCCESS:
      return {...initialState, searchData: action.payload};
    case SEARCH_DATA_FAIL:
      return {...initialState, searchDataFail: true};
    case SAVE_DATA_SUCCESS:
      return {...initialState, saveDataSuccess: true};
    case SAVE_DATA_FAIL:
      return {...initialState, saveDataFail: true};
    case SET_SELECTED_ITEM:
      return {
        ...initialState,
        selected: action.payload,
        searchData: action.data,
      };

    default:
      return state;
  }
};

export default MediaReducer;
