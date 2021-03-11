import {takeEvery, put, call} from 'redux-saga/effects';
import {SAVE_DATA, SEARCH_DATA} from '../constants';
import {
  saveDataSuccess,
  saveDataFail,
  searchDataSuccess,
  searchDataFail,
} from '../actions';
import api from '../../../middleware/commonApi';

function* getSearchData(action) {
  try {
    const {payload} = action;
    const result = yield call(api.searchItunes, payload);
    if (result.status === 200) {
      yield put(searchDataSuccess(result.data.results));
    }
  } catch (error) {
    console.log('search err ==>>>>>> ', error);
    yield put(searchDataFail());
  }
}
function* saveSearchData(action) {
  try {
  } catch (error) {}
}

export default function* mediaSagas() {
  yield* [takeEvery(SEARCH_DATA, getSearchData)];
  yield* [takeEvery(SAVE_DATA, saveSearchData)];
}
