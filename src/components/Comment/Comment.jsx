import React from "react";
import './Comments.css'
function Comment(props) {
  return (
    <div className="comment-container flex">
      <div className="comment-profile">
        <img src={props.image} alt="profile" />
        <i className="fa-solid fa-quote-left"></i>
      </div>
      <div className="comment">
        <p>{props.disription}</p>
      </div>
      <div className="line"/>
      <div className="comment-information">
        <h1>{props.name}</h1>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Comment;
