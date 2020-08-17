import React from 'react';
import './App.css';
import { updatefeed,setSearchQuery} from "./actions/feedActions";
import { shallowEqual, useSelector,useDispatch,} from 'react-redux';
import SearchBar from './components/SearchBar';
import Feed from './components/Feed';

function App() {

  const { feedItems} = useSelector(state => ({
    feedItems: state.feed.items
  }), shallowEqual);

  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(updatefeed())
    },
    [dispatch]
  );

  const handleClick = React.useCallback(
    (value) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch]
  );

  return (  
    <div className="App">
      <header className="App-header">
        <h3 className="App-logo"> Flickr Feeed</h3>
        <SearchBar onChange={handleClick}/>
      </header>
      {feedItems && <Feed items={feedItems}/>}
    </div>
  );
}

export default App