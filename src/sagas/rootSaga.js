import {all,spawn,call} from 'redux-saga/effects';
import {watchFeedByTags} from './feedSaga';
/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
WATCH SAGAS
¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
// notice how we now only export the rootSaga to store - single entry point to start all Sagas at once
export default function* rootSaga () {
  const sagas = [
    watchFeedByTags
  ];
  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}