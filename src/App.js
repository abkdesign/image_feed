import React from 'react';
import logo from './logo.svg';
import './App.css';
import { updatefeed,setSearchQuery,deleteSearchQueryArray } from "./actions/feedActions";
import { shallowEqual, useSelector,useDispatch} from 'react-redux';
import SearchBar from './components/SearchBar';
import SearchChips from './components/SearchChips';
import Feed from './components/Feed';
// useCallback when clicking 
function App() {
  
  const dispatch = useDispatch();
  const { feedItems,query } = useSelector(state => ({
    query: state.feed.query,
    feedItems: state.feed.items
  }), shallowEqual);

  React.useEffect(() => {
    dispatch(updatefeed())
    },[dispatch]
  );

  const handleClick = React.useCallback(
    (value) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch]
  );
  const handleQueryDelete = React.useCallback(
    (value) => {
      dispatch(deleteSearchQueryArray(value));
    },
    [dispatch]
  );


  return (
    <div className="App">
      <header className="App-header">
        <h3> Flickr Feeed</h3>
        <SearchBar onChange={handleClick}/>
        { query && <SearchChips onDelete={handleQueryDelete} query={query}/>}
      </header>
      {feedItems  && <Feed items={feedItems}/>}
    </div>
  );
}

export default App;
