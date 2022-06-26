import React from "react";
import "./../Post.css"

const AddPost = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    const checkEnable = e.target.Title.value && e.target.Body.value ? true : false;
    checkEnable && onAdd(e.target.Title.value,e.target.Body.value);
    e.target.Title.value = "";
    e.target.Body.value = "";
}

  return (
    <div className="addPostDiv">
      <form onSubmit={handleOnSubmit}>
        <input className="input" placeholder="Title" name="Title" />
        <input className="input" placeholder="Body" name="Body" />
        <button 
            className="submitButton" 
            onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddPost;