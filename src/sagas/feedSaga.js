import { call, put,takeLatest,delay } from 'redux-saga/effects';
import {fetchMethod} from '../utils/index';
import {isArray} from './../utils/typeHelpers';
import {
  updatefeedError,
  updatefeedSuccess,
  UPDATE_FEED,
  SET_SEARCH_QUERY,
} from './../actions/feedActions';


/**
 * feedByTags Api saga
 * @param {string} url - comma separated value to clean
 * @param {object} query - comma separated value to clean
 * @returns {json} returns the url for the api
 */
export function* feedByTags({...args } = {}){
  const {url,query} = args || {} ;

  // A comma delimited list of tags to filter the feed by.
  const feedQueryKeys = Object.assign({},{
    tags: query
  });

  try {
    const feed = yield call(
      fetchMethod,
      'GET',
      url,
      feedQueryKeys
    )
    yield put(updatefeedSuccess(feed));
 
   } catch (error) {
    yield put(updatefeedError(error));
    
  }
} 

/**
 * feedQuerySaga for tags query handling
 * @param {array} action.payload - payload with the array
 */
function* feedQuerySaga(action){

  const tagsArray = yield isArray(action.payload) ? action.payload : [];
  const queryArrayProvider = (currentValue) => currentValue.label;
  const convertedQueryArray = yield tagsArray.map(queryArrayProvider)
  const queryString = convertedQueryArray.join(",");
  yield delay(500)
  yield call(feedByTags,{query:queryString})

}

// feedByTags watcher 
export function* watchFeedByTags(){
  yield takeLatest(UPDATE_FEED, feedByTags);
  yield takeLatest(SET_SEARCH_QUERY, feedQuerySaga);
} 