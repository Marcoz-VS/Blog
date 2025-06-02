const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPostById(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener el post');
  }
  return await response.json();
}

export async function getUserById(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error('Error al obtener el usuario');
  }
  return await response.json();
}
