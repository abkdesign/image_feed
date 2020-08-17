import {
  UPDATE_FEED_SUCCESS,
  UPDATE_FEED_ERROR, 
  SET_SEARCH_QUERY,
} from './../actions/feedActions';

const initState ={}

export function feed(state = initState, action) {
  switch (action.type) {
    case UPDATE_FEED_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_FEED_ERROR:
      return{
        ...state,
        error:action.payload
      }  
    case SET_SEARCH_QUERY:
      return {
        ...state,
        queryString: action.payload
      }
      
    default:
      return state
  }
}
