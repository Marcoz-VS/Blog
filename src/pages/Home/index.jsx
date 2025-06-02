import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import { getPosts } from './homeService';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>📚 Lista de Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
