import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <li>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostItem;
