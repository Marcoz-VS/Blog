import { useEffect, useState } from 'react';
import { getAllUsers } from '../PostDetails/postService';
import PostItem from './PostItem';


const PostList = ({ posts }) => {
  const [postsWithAuthors, setPostsWithAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const users = await getAllUsers();
        setAllUsers(users);
      } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        setError('Erro ao carregar os usuários.');
      }
    }
    fetchAllUsers();
  }, []);

  useEffect(() => {
    async function fetchAuthors() {
      if (allUsers.length === 0) return;

      try {
        console.log('Posts recebidos:', posts.map(p => ({ id: p.id, userId: p.userId })));
        const postsWithAuthorData = await Promise.all(
          posts.map((post) => {
            const randomUserId = ((post.id * 17) % 10) + 1;
            const userData = allUsers[randomUserId - 1];
            console.log(`Post ${post.id} - userId ${randomUserId}:`, userData);
            return { ...post, assignedUserId: randomUserId, author: userData.name, authorEmail: userData.email };
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
  }, [posts, allUsers]);

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
