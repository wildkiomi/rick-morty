import {
  FETCH_CHARACTERS,
  updateCharacters,
  FETCH_CHARACTER,
  updateCharacter,
  updatePage,
} from "./actions";
import { select, put, call, takeEvery } from "redux-saga/effects";
import { getCharacter } from "rickmortyapi";

function* fetchCharacters() {
  try {
    const page = yield select((state) => state.page);
    const { results: characters } = yield call(getCharacter, { page });
    yield put(updateCharacters(characters));
    yield put(updatePage());
  } catch (error) {
    console.log(error);
  }
}

function* fetchCharacter({ payload: id }) {
  try {
    const character = yield call(getCharacter, +id);
    yield put(updateCharacter(character));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetches() {
  yield takeEvery(FETCH_CHARACTERS, fetchCharacters);
  yield takeEvery(FETCH_CHARACTER, fetchCharacter);
}
