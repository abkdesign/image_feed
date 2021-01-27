import React from 'react';
import './App.css';
import { updatefeed,setSearchQuery} from "./actions/feedActions";
import { shallowEqual, useSelector,useDispatch,} from 'react-redux';
import SearchBar from './components/SearchBar';
import {useTransition, animated} from 'react-spring';
import Loader from './shared/Loader';
import ErrorBoundary  from './shared/ErrorBoundary';
const Feed = React.lazy(() => import('./components/Feed'));



function App() {
  const { feedItems} = useSelector(state => ({
    feedItems: state.feed.items
  }), shallowEqual);
  const [startTransitionNewModule, isNewModulePending] = useTransition({
    timeoutMs: 3000
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(updatefeed())
    },
    [dispatch]
  );


  return (  
    <div className="App">
      <header className="App-header">
        <h3 className="App-logo"> Flickr Feeed</h3>
        <SearchBar/>
      </header>
      <ErrorBoundary>
        <React.Suspense fallback={<Loader />}>
          {feedItems && <Feed items={feedItems}/>}
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App