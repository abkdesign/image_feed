import {isString} from './typeHelpers';
import queryString from 'query-string';
import axios from 'axios';
const mainUrl = `https://www.flickr.com/services/feeds/photos_public.gne`


/**
 * bodyParser only used for put and post http requests 
 * @param {string} method - comma separated value to clean
 * @param {any} data - comma separated value to clean
 * @returns {json} returns the url for the api
 */

function bodyParser(method, data){
  const postCondition =  isString(method) && method === 'POST' && data !== undefined;
  const putCondition = isString(method) && method === 'PUT' && data !== undefined;

  if(postCondition || putCondition){
    return JSON.stringify(data)
  } 

  return null
}

/**
 * generateUrl for combining query and urls for the api call
 * @param {string} mainUrl - comma separated value to clean
 * @param {string} url - comma separated value to clean
 * @param {object} query - comma separated value to clean
 * @returns {string} returns the url for the api
 */

function generateUrl({mainUrl,url,query}){

  const formatStr = `?format=json&nojsoncallback=true`;
  const presetQueryKeys = queryString.parse(formatStr);
  
  let parsedQueryKeys = isString(query) ? queryString.parse(query) : query;
  let updatedQueryKeys = Object.assign({},{
    ...parsedQueryKeys,
    ...presetQueryKeys
  })
  let parsedQuery = queryString.stringify(updatedQueryKeys)
  let parsedUrl =  url !== undefined ? url : '';
 
  return `${mainUrl}${parsedUrl}?${parsedQuery}` 
}

/**
 * fetchMethod for api calls
 * @param {string} method - comma separated value to clean
 * @param {string} url - comma separated value to clean
 * @param {object} query - comma separated value to clean
 * @param {any} data - body data for post http calls
 * @returns {json} Data returns json - hardcoded in formatStr.
 */

function fetchMethod(method,url,query=undefined,data=undefined) {
 
  if(isString(method) && method === 'POST'){
    
    return axios.post(generateUrl(mainUrl,url,query),bodyParser(method, data))
    .then((response) => response.data)
    .catch((err) => {
      throw new Error('Error')
    })
  }

  if(isString(method) && method === 'GET'){
    
    return axios.get(generateUrl({mainUrl,url,query})) 
    .then((response) => response.data)
    .catch((err) => {
      throw new Error('Error')
    })
  }
}
export{
  fetchMethod
}
