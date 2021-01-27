import React from 'react'
import Close from '@material-ui/icons/Close';

const TagInputList = (props) => {
    const { setTagData, tagData, onChange } = props;
    const handleDelete = React.useCallback(
        (tagToDelete) => {
          let updatedTagData = (tags) => tags.filter((tag) => tag.id !== tagToDelete);
          setTagData(updatedTagData);
         onChange(updatedTagData);
        },
        [ onChange,tagData],
    );
    return (
        <ul className="tagInput__list">
        {tagData.map((tag)=>{
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
    )
}
export {TagInputList as TagInputList}