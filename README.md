Blog with JSONPlaceholder
📘 This README is also available in Português 🇧🇷 (scroll down for the full translation)

📖 Description
This is a simple blog project for learning purposes. It uses the free JSONPlaceholder API to simulate a real blog with posts and users.

On the Home page, users can see a list of blog post titles. By clicking a title, the app navigates to the PostDetails page, which displays the full post content and the author's information.

🛠️ Technologies
JavaScript

React

HTML & CSS

JSONPlaceholder (REST API)

🚀 How to Run the Project
Clone the repository:

bash
Copiar
Editar
git clone https://github.com/Marcoz-VS/Blog/tree/dev
Go to the project folder:

bash
Copiar
Editar
cd your-project-name
Install the dependencies:

bash
Copiar
Editar
npm install
Run the development server:

bash
Copiar
Editar
npm run dev
✅ Make sure you have Node.js and npm installed.

🧭 Pages
🏠 Home
Fetches and displays a list of post titles from the API. Each title is clickable and leads to the post details page.

📄 PostDetails
Displays the full title, content (body), and the user who created the post. Uses the userId field from the post to fetch the author's data from /users.

📁 Folder Structure
css
Copiar
Editar
src/
├── pages/
│   ├── Home/
│   │   ├── index.jsx
│   │   ├── PostList.jsx
│   │   ├── PostItem.jsx
│   │   └── homeService.js
│   └── PostDetails/
│       ├── index.jsx
│       └── postService.js
├── App.jsx
└── main.jsx
🙏 Thanks
Thanks to JSONPlaceholder for providing a free fake API for testing and prototyping.

📘 Leia em Português (PT-BR)
📖 Descrição
Este é um projeto simples de blog, feito com fins educativos. Ele utiliza a API gratuita JSONPlaceholder para simular um blog real com posts e usuários.

Na página Home, o usuário pode ver uma lista com os títulos dos posts. Ao clicar em um título, o aplicativo leva para a página PostDetails, onde é exibido o conteúdo completo do post e as informações do autor.

🛠️ Tecnologias
JavaScript

React

HTML e CSS

JSONPlaceholder (API REST)

🚀 Como Rodar o Projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Marcoz-VS/Blog/tree/dev
Acesse a pasta do projeto:

bash
Copiar
Editar
cd seu-nome-do-projeto
Instale as dependências:

bash
Copiar
Editar
npm install
Rode o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
✅ Certifique-se de ter o Node.js e o npm instalados.

🧭 Páginas
🏠 Home
Busca e exibe uma lista com os títulos dos posts. Cada título é clicável e leva aos detalhes do post.

📄 PostDetails
Mostra o título completo, o conteúdo (body) e o autor do post. Usa o campo userId do post para buscar os dados do autor na rota /users.

📁 Estrutura de Pastas
css
Copiar
Editar
src/
├── pages/
│   ├── Home/
│   │   ├── index.jsx
│   │   ├── PostList.jsx
│   │   ├── PostItem.jsx
│   │   └── homeService.js
│   └── PostDetails/
│       ├── index.jsx
│       └── postService.js
├── App.jsx
└── main.jsx
🙏 Agradecimentos
Agradecimentos ao JSONPlaceholder pela API gratuita para testes e protótipos.
