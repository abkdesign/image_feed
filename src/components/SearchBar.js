import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { v1 as uuidv1} from 'uuid';
import SearchIcon from '@material-ui/icons/Search';
import {TagInputList}  from './TagInputList';
import { setSearchQuery } from "./../actions/feedActions";
import { useDispatch } from 'react-redux';

export default function SearchBar(props) {
  const dispatch = useDispatch();
  const [tagData, setTagData] = React.useState([]);
  const searchInput = React.useRef(null); 

  const onChange = React.useCallback(
    (value) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch]
  );


  const inputCallback = React.useCallback(
    (event,{...args} = {}) => {

      // CharCode 13 is Enter, 
      // CharCode32 is space, 
      // Custom CharCode 1000 is button
      // https://css-tricks.com/snippets/javascript/javascript-keycodes/
      
      const {btnCharCode} = args;
      const newValue = searchInput.current.value.trim();
      const isNotDefined = newValue !== null &&  newValue !== "" 
      const isKeyboard = event.charCode === 13 || event.charCode === 32;
  
      if((isNotDefined && isKeyboard ) || (isNotDefined  && btnCharCode === 1000)){
        let newValueObj = Object.assign({},{
          id: uuidv1(),
          label: newValue.trim()
        });
        setTagData([...tagData, newValueObj])
        onChange([...tagData, newValueObj]);
        searchInput.current.value = '';
        searchInput.current.focus();
      }
    },
    [ onChange,tagData],
  );
  return (  
    <div className="tagInput__wrapper">
     <TagInputList setTagData={setTagData} tagData={tagData} onChange={onChange}/>
      <input
        id="feedInput"
        type="text"
        autoFocus
        placeholder="Search by tags"
        ref={searchInput}
        onKeyPress={(event)=>inputCallback(event)}
      />
      <IconButton color="primary"  aria-label="directions" onClick={(event)=>inputCallback(event,{btnCharCode:1000})} >
        <SearchIcon />
      </IconButton>
    </div>
  );
}
