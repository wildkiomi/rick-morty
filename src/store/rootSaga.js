import { watchFetches } from "./sagas";
import { spawn, call, all } from "redux-saga/effects";

export default function* rootSaga() {
  const sagas = [watchFetches];

  yield all(
    sagas.map((saga) =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
