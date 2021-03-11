import {
  SAVE_DATA,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_FAIL,
  SEARCH_DATA,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
  SET_SELECTED_ITEM,
} from '../constants';

export const saveData = (payload) => {
  return {
    type: SAVE_DATA,
    payload,
  };
};
export const saveDataSuccess = (payload) => {
  return {
    type: SAVE_DATA_SUCCESS,
    payload,
  };
};
export const saveDataFail = () => {
  return {
    type: SAVE_DATA_FAIL,
  };
};
export const searchData = (payload) => {
  return {
    type: SEARCH_DATA,
    payload,
  };
};
export const searchDataSuccess = (payload) => {
  return {
    type: SEARCH_DATA_SUCCESS,
    payload,
  };
};
export const searchDataFail = () => {
  return {
    type: SEARCH_DATA_FAIL,
  };
};
export const setSelectedItem = (payload, data) => {
  return {
    type: SET_SELECTED_ITEM,
    payload,
    data,
  };
};
