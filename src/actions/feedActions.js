
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const UPDATE_FEED = 'UPDATE_FEED';
export const UPDATE_FEED_SUCCESS = 'UPDATE_FEED_SUCCESS';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const UPDATE_SEARCH_QUERY_ARRAY = 'UPDATE_SEARCH_QUERY_ARRAY';
export const DELETE_SEARCH_QUERY_ARRAY = 'DELETE_SEARCH_QUERY_ARRAY';

export function visibilityFilter(){
  return { 
    type: SET_VISIBILITY_FILTER, 
    filter: 'SHOW_ALL' 
  }
}

export function setSearchQuery(payload){
  return { 
    type: SET_SEARCH_QUERY, 
    payload
  }
}
export function updateSearchQuery(payload){
  return {
    type:UPDATE_SEARCH_QUERY,
    payload
  }
}

export function updateSearchQueryArray(payload){
  return {
    type:UPDATE_SEARCH_QUERY_ARRAY,
    payload
  }
}
export function deleteSearchQueryArray(payload){
  return{
    type: DELETE_SEARCH_QUERY_ARRAY,
    payload
  }
}


export function updatefeed(){
  return { 
    type: UPDATE_FEED, 
  }
}
export function updatefeedSuccess(feed){
  console.log('updateFeed',feed)
  return { 
    type: UPDATE_FEED_SUCCESS, 
    payload:feed
  }
}





