import {
  UPDATE_FEED_SUCCESS, 
  SET_SEARCH_QUERY,
  UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_QUERY_ARRAY,
  DELETE_SEARCH_QUERY_ARRAY
} from './../actions/feedActions';

const initState ={
  query:null,
  queryString:null,
  prevQueryString:null
}

export function feed(state = initState, action) {
  switch (action.type) {
    case UPDATE_FEED_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        prevQueryString: state.queryString,
        queryString: action.payload
      }
    case UPDATE_SEARCH_QUERY_ARRAY:
      return{
        ...state,
        query:action.payload
      }
    case DELETE_SEARCH_QUERY_ARRAY:
      const chipToDelete = action.payload
      const newQuery = state.query.filter((chip) => chip.key !== chipToDelete)
      return{
        ...state,
        query:newQuery
      }      
    default:
      return state
  }
}

export function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}
