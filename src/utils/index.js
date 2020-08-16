import {isArray,isObject,isString} from './typeHelpers';
import fetchJsonp from 'fetch-jsonp';
import queryString from 'query-string';
import axios from 'axios';
const mainUrl = `https://www.flickr.com/services/feeds/photos_public.gne`

function bodyParser(method, data){
  const postCondition =  isString(method) && method === 'POST' && data !== undefined;
  const putCondition = isString(method) && method === 'PUT' && data !== undefined;

  if(postCondition || putCondition){
    return JSON.stringify(data)
  } 

  return null
}

function generateUrl({mainUrl,url,query}){
 console.log('generate url', query)
  const formatStr = `?format=json&nojsoncallback=true`;
  const presetQueryKeys = queryString.parse(formatStr);
  
  let parsedQueryKeys = isString(query) ? queryString.parse(query) : query;
  let updatedQueryKeys = Object.assign({},{
    ...parsedQueryKeys,
    ...presetQueryKeys
  })
  let parsedQuery = queryString.stringify(updatedQueryKeys)
  let parsedUrl =  url !== undefined ? url : '';
  console.log('parsedQuery',parsedQuery, 'parsedUrl',parsedUrl, 'updatedQueryKeys',updatedQueryKeys, parsedQueryKeys)
  return `${mainUrl}${parsedUrl}?${parsedQuery}` 
}

function fetchMethod(method,url,query=undefined,data=undefined) {
  console.log('fetch url',url)
  if(isString(method) && method === 'POST'){
    
    return axios.post(generateUrl(mainUrl,url,query),bodyParser(method, data))
    .then((response) => response.data)
    .catch((err) => console.log(err))
  }

  if(isString(method) && method === 'GET'){
    
    return axios.get(generateUrl({mainUrl,url,query})) 
    .then((response) => response.data)
    .catch((err) => console.log(err))
  }
}
export{
  fetchMethod
}

/*

id (Optional)
    A single user ID. This specifies a user to fetch for.
ids (Optional)
    A comma delimited list of user IDs. This specifies a list of users to fetch for.
tags (Optional)
    A comma delimited list of tags to filter the feed by.
tagmode (Optional)
    Control whether items must have ALL the tags (tagmode=all), or ANY (tagmode=any) of the tags. Default is ALL.
format (Optional)
    The format of the feed. See the feeds page for feed format information. Default is Atom 1.0.
lang (Optional)
    The display language for the feed. See the feeds page for feed language information. Default is US English (en-us). 
*/
