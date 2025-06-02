import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostById, getUserById } from './postService';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPostAndAuthor() {
      try {
        const postData = await getPostById(id);
        setPost(postData);

        const userData = await getUserById(postData.userId);
        setAuthor(userData);
      } catch (err) {
        console.error(err);
        setError('Hubo un error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    }

    fetchPostAndAuthor();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <h3>Autor: {author.name}</h3>
      <p>Email: {author.email}</p>
    </div>
  );
}

export default PostDetails;
