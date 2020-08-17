/**
 * @jest-environment node
 */
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {feedByTags} from './../feedSaga';
import {
  updatefeed,
} from './../../actions/feedActions';

it('fetches the feed', () => {
  const feed = { 
    title: 'Uploads from everyone',
    link: 'https://www.flickr.com/photos/',
    description: '',
    modified: '2020-08-17T15:17:20Z',
    generator: 'https://www.flickr.com',
    items:[{}]
  };
  const api = {fakeFeed: ()=> (feed)};
  return expectSaga(feedByTags)
  // provider match
  .provide([
    [matchers.call.fn(api.fakeFeed), feed]
  ])
  // Dispatch updatefeed actions
  .dispatch(updatefeed())
  
  // Start the test.
  .run(false);
  
});


