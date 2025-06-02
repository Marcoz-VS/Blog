export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Erro ao buscar posts');
  return await response.json();
};
