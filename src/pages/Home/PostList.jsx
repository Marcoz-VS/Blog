import { useEffect, useState } from 'react';
import { getUserById } from '../PostDetails/postService';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  const [postsWithAuthors, setPostsWithAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const postsWithAuthorData = await Promise.all(
          posts.map(async (post) => {
            const userData = await getUserById(post.userId);
            return { ...post, author: userData.name };
          })
        );
        setPostsWithAuthors(postsWithAuthorData);
      } catch (err) {
        console.error('Erro ao buscar autores:', err);
      }
    }
    fetchAuthors();
  }, [posts]);

  return (
    <ul>
      {postsWithAuthors.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
