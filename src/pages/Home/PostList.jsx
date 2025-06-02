import { useEffect, useState } from 'react';
import { getUserById } from '../PostDetails/postService';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  const [postsWithAuthors, setPostsWithAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAuthors() {
      try {
        console.log('Posts recebidos:', posts.map(p => ({ id: p.id, userId: p.userId })));
        const postsWithAuthorData = await Promise.all(
          posts.map(async (post) => {
            const userData = await getUserById(post.userId);
            console.log(`Post ${post.id} - userId ${post.userId}:`, userData);
            return { ...post, author: userData.name, authorEmail: userData.email };
          })
        );
        setPostsWithAuthors(postsWithAuthorData);
      } catch (err) {
        console.error('Erro ao buscar autores:', err);
        setError('Erro ao carregar os autores dos posts.');
      } finally {
        setLoading(false);
      }
    }
    fetchAuthors();
  }, [posts]);

  if (loading) return <p className="loading">Carregando posts...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <ul>
      {postsWithAuthors.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
