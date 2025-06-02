// src/pages/PostDetails/index.jsx
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

  if (loading) return <p className="loading">Cargando...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="card">
      <h1>{post?.title || 'Título não disponível'}</h1>
      <p>{post?.body || 'Conteúdo não disponível'}</p>
      <hr />
      <h3>Autor: {author?.name || 'Desconhecido'}</h3>
      <p>Email: {author?.email || 'Não disponível'}</p>
      <Link to="/">Volver a la lista de posts</Link>
    </div>
  );
}

export default PostDetails;
