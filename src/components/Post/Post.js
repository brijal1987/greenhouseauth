import React from 'react';
import './Post.scss';
import { Link } from "react-router-dom";

export const Post = props => {

  return (
      <div className="posts">
        <Link to={"#"}>{props.Name}</Link>
        <p>Sex: {props.Sex}</p>
        <p>Age: {props.Age}</p>
        <p>Ticket: {props.Ticket}</p>
      </div>
  );
}

export default Post;