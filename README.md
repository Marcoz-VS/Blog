# Blog with JSONPlaceholder

> 📘 This README is also available in **Português (PT-BR)** — _scroll down for the full translation!_

---

## 📖 Description

A simple, learning-focused blog project powered by [JSONPlaceholder](https://jsonplaceholder.typicode.com/). It simulates a real blog, featuring posts and user profiles.

- **Home page:** View a list of blog post titles. Clicking a title navigates to the post’s details.
- **Post Details:** See the full post content and author information.

---

## 🛠️ Technologies

- **JavaScript**
- **React**
- **HTML & CSS**
- **JSONPlaceholder** (REST API)

---

## 🚀 Getting Started

**1. Clone the repository:**

```bash
git clone https://github.com/Marcoz-VS/Blog.git
```

**2. Go to the project folder:**

```bash
cd Blog
```

**3. Install dependencies:**

```bash
npm install
```

**4. Run the development server:**

```bash
npm run dev
```

> ✅ _Make sure you have Node.js and npm installed._

---

## 🧭 Pages

### 🏠 Home

Fetches and displays a list of post titles from the API. Each title is clickable and leads to the post details page.

### 📄 Post Details

Shows the full title, content (body), and the author of the post. The app uses the `userId` field to fetch author data from `/users`.

---

## 📁 Folder Structure

```
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
```

---

## 🙏 Thanks

Huge thanks to [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a free fake API for testing and prototyping.

---

# 📘 Leia em Português (PT-BR)

## 📖 Descrição

Este é um projeto simples de blog, feito para fins educativos, utilizando a [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para simular posts e usuários.

- **Página Home:** Lista de títulos dos posts. Ao clicar, mostra os detalhes do post.
- **Detalhes do Post:** Exibe o conteúdo e informações do autor.

---

## 🛠️ Tecnologias

- **JavaScript**
- **React**
- **HTML e CSS**
- **JSONPlaceholder** (API REST)

---

## 🚀 Como Rodar o Projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/Marcoz-VS/Blog.git
```

**2. Acesse a pasta do projeto:**

```bash
cd Blog
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Rode o servidor de desenvolvimento:**

```bash
npm run dev
```

> ✅ _Certifique-se de ter o Node.js e o npm instalados._

---

## 🧭 Páginas

### 🏠 Home

Busca e exibe uma lista com os títulos dos posts. Cada título é clicável e leva aos detalhes do post.

### 📄 Detalhes do Post

Exibe o título completo, o conteúdo (body) e o autor. Usa o campo `userId` para buscar dados do autor em `/users`.

---

## 📁 Estrutura de Pastas

```
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
```

---

## 🙏 Agradecimentos

Agradecimentos ao [JSONPlaceholder](https://jsonplaceholder.typicode.com/) pela API gratuita para testes e protótipos.
