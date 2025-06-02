import { useEffect, useState } from 'react';
import PostItem from './PostItem';

// Componente responsável por listar todos os posts e buscar autores únicos de uma API externa
const PostList = ({ posts }) => {
  const [postsWithAuthors, setPostsWithAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchRandomUsersAndAssign() {
      try {
        // Busca o mesmo número de usuários que o número de posts
        const response = await fetch(`https://randomuser.me/api/?results=${posts.length}&nat=br`);
        const data = await response.json();
        const users = data.results;

        // Associa cada post a um usuário único da resposta da API
        const postsWithAuthorData = posts.map((post, index) => {
          const user = users[index];
          return {
            ...post,
            author: `${user.name.first} ${user.name.last}`,
            authorEmail: user.email,
          };
        });

        setPostsWithAuthors(postsWithAuthorData);
      } catch (err) {
        console.error('Erro ao buscar autores:', err);
        setError('Erro ao carregar os autores dos posts.');
      } finally {
        setLoading(false);
      }
    }

    fetchRandomUsersAndAssign();
  }, [posts]);

  // Estados de carregamento e erro
  if (loading) return <p className="loading">Carregando posts...</p>;
  if (error) return <p className="error">{error}</p>;

  // Renderiza os posts com os dados dos autores
  return (
    <ul>
      {postsWithAuthors.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
