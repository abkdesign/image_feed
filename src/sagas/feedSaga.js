import { call, put,takeLatest,select,take, takeEvery,delay } from 'redux-saga/effects';
import * as R from 'ramda';
import {fetchMethod} from '../utils/index';
import {stringToArray} from './../utils/utilHelpers';
import{getPreviousQueryString,getQueryString} from './../utils/selectors';
import {
  updatefeedSuccess,
  UPDATE_FEED,
  SET_SEARCH_QUERY,
  UPDATE_SEARCH_QUERY,
  updateSearchQuery,
  setSearchQuery,
  updateSearchQueryArray,
  
} from './../actions/feedActions';
// A comma delimited list of tags to filter the feed by.
function* feedByTags({...args}){
  const {url,query,type} = args;
  const feedQueryKeys = Object.assign({},{
    tags: query
  })
  console.log('feed query',type, query,feedQueryKeys)
  try {
    const feed = yield call(
       fetchMethod,
       'GET',
        url,
        query !== undefined ? feedQueryKeys : undefined
     )
    yield put(updatefeedSuccess(feed));
   } catch (error) {
     console.log(error)
  }
} 


function* feedQuerySaga(action){

  let prevStr = yield select(getPreviousQueryString);
  yield put(updateSearchQuery(action.payload));
  let str = yield select(getQueryString);

  const queryStringCondition = prevStr !== null && str!== null && stringToArray(prevStr)(" ").length < stringToArray(str)(" ").length;
  if(queryStringCondition){

    const queryStringToArray = stringToArray(str.trim())(" ");
    console.log('queryStringToArray',queryStringToArray)
    const queryArrayProvider = (currentValue,index) => Object.assign({},{
      key: index,
      label:currentValue
    });
    const convertedQueryArray = queryStringToArray.map(queryArrayProvider)
    yield put(updateSearchQueryArray(convertedQueryArray))
    yield delay(500)
    yield call(feedByTags,{query:queryStringToArray.join(",")})
    
  }
  return true
}
// feedByTags watcher 
export function* watchFeedByTags(){
  yield takeLatest(UPDATE_FEED, feedByTags);
  yield takeLatest(SET_SEARCH_QUERY, feedQuerySaga);
} 