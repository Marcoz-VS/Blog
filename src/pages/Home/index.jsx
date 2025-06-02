import { useEffect, useState } from 'react';
import PostList from './PostList';
import { getPosts } from './homeService';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Erro ao carregar os posts.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <p className="loading">Cargando...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h1>📚 Lista de Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
