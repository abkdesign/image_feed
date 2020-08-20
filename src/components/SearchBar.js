import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { v1 as uuidv1} from 'uuid';
import Close from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar(props) {
  const [tagData, setTagData] = React.useState([]);
  const searchInput = React.useRef(null); 

  const handleDelete = React.useCallback(
    (tagToDelete) => {
      let updatedTagData = (tags) => tags.filter((tag) => tag.id !== tagToDelete);
      setTagData(updatedTagData);
      props.onChange(updatedTagData);
    },
    [ props,tagData],
  );

  const inputCallback = React.useCallback(
    (event,{...args} = {}) => {

      // CharCode 13 is Enter, 
      // CharCode32 is space, 
      // Custom CharCode 1000 is button
      // https://css-tricks.com/snippets/javascript/javascript-keycodes/
      
      const {btnCharCode} = args;
      let newValue = searchInput.current.value.trim();
      const isNotDefined = newValue !== null &&  newValue !== "" 
      const isKeyboard = event.charCode === 13 || event.charCode === 32;
  
      if((isNotDefined && isKeyboard ) || (isNotDefined  && btnCharCode === 1000)){
        let newValueObj = Object.assign({},{
          id: uuidv1(),
          label: newValue.trim()
        });
        setTagData([...tagData, newValueObj])
        props.onChange([...tagData, newValueObj]);
        searchInput.current.value = '';
        searchInput.current.focus();
      }
    },
    [ props,tagData],
  );
  return (  
    <div className="tagInput__wrapper">
      <ul className="tagInput__list">
        {tagData.map((tag,index)=>{
          return(
            <li className="tagInput__item" key={tag.id}>
              <span className="tagInput__title">{tag.label}</span>
              <span className="tagInput__icon" onClick={()=>handleDelete(tag.id)}>
              <Close/>
              </span>
            </li>
          )
        })}
      </ul>
      <input
        type="text"
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
