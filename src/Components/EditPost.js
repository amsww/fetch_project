import React from "react";
import "./../Post.css"

const EditPost = ({ onEdit}) => {




const handleOnSubmit = (e) => {
    e.preventDefault();
    const checkEnable =   e.target.Title.value &&  e.target.Body.value && e.target.Id.value
    checkEnable && onEdit(e.target.Id.value,e.target.Title.value,e.target.Body.value);
    e.target.Title.value = "";
    e.target.Id.value ="";
    e.target.Body.value = "";
}

  return (
    <div className="addPostDiv">
      <form onSubmit={handleOnSubmit}>
        <input className="input" placeholder="Id" name="Id" type={"number"} min={0} />
        <input className="input" placeholder="Title" name="Title" />
        <input className="input" placeholder="Body" name="Body" />
        <button className="submitButton" onSubmit={handleOnSubmit}>Edit</button>
        <hr />
      </form>
    </div>
  );
};

export default EditPost