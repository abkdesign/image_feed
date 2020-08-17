export const UPDATE_FEED = 'UPDATE_FEED';
export const UPDATE_FEED_SUCCESS = 'UPDATE_FEED_SUCCESS';
export const UPDATE_FEED_ERROR = 'UPDATE_FEED_ERROR';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';


export function setSearchQuery(payload){
  return { 
    type: SET_SEARCH_QUERY, 
    payload
  }
}

export function updatefeed(){
  return { 
    type: UPDATE_FEED, 
  }
}

export function updatefeedSuccess(feed){
  return { 
    type: UPDATE_FEED_SUCCESS, 
    payload:feed
  }
}

export function updatefeedError(error){
  return { 
    type: UPDATE_FEED_ERROR, 
    payload:error
  }
}




