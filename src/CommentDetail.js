import React from "react";
import faker from "faker";

const CommentDetial = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Choco
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
    </div>
  );
};

export default CommentDetial;
