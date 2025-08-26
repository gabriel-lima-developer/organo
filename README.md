# 🎼 Organo - Organizador de Artistas Musicais

## 📝 Descrição

Organo é um projeto dinâmico desenvolvido em React que funciona como um organizador de gostos musicais. Com ele, você pode criar "cards" para seus artistas preferidos, informando sua posição em um ranking pessoal, nome, música favorita e imagem. É possível também cadastrar novos gêneros musicais e organizar os artistas nessas categorias, tudo em uma interface limpa e interativa.

Este projeto foi criado como parte de um estudo prático para aprofundar os conhecimentos em React, explorando conceitos como componentes, estado, props, eventos, validação de formulários e manipulação de listas.

## 🚀 Deploy

A aplicação está publicada e pode ser acessada através do link:
**[https://organo-one-eta.vercel.app/](https://organo-one-eta.vercel.app/)**

## ✨ Funcionalidades

- **Criação de Cards de Artistas:** Adicione seus artistas favoritos em um ranking pessoal (Top 5).
- **Cadastro de Novos Gêneros:** Crie novas seções de gêneros musicais com nome e cor de destaque personalizados.
- **Alteração de Cor do Gênero:** Mude a cor de fundo de um gênero existente diretamente pela interface.
- **Favoritar Artistas:** Marque seus artistas preferidos com um ícone de coração.
- **Exclusão de Artistas:** Remova cards de artistas que não deseja mais ver na lista.
- **Organização por Gênero:** Os artistas são automaticamente agrupados sob seus respectivos gêneros.
- **Design Responsivo:** A aplicação se adapta a diferentes tamanhos de tela para uma melhor experiência do usuário. *(Remova esta linha se não for responsivo)*

## 🚦 Regras de Validação

Para garantir a integridade dos dados, as seguintes regras foram implementadas:

### Cadastro de Artista:
- **Limite de 5 Artistas:** O sistema permite o cadastro de no máximo 5 artistas.
- **Campos Obrigatórios:** Os campos `Nome`, `Gênero` e `Posição no rank` são de preenchimento obrigatório.
- **Rank Único:** A `Posição no rank` deve ser única para cada artista, não sendo possível cadastrar dois artistas na mesma posição.

### Cadastro de Gênero:
- **Campos Obrigatórios:** Para criar um novo gênero, tanto o campo `Nome` quanto o campo `Cor` são obrigatórios.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para criar interfaces de usuário.
- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem de programação principal.
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)**: Para estilização e design da aplicação.
- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)**: Para a estrutura da página.

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/gabriel-lima-developer/organo]
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd organo
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie a aplicação:**
    ```bash
    npm start
    ```

5.  Abra seu navegador e acesse `http://localhost:3000` para ver a aplicação em funcionamento.

## 👨‍💻 Autor

Desenvolvido por **Gabriel Lima**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-lima-211901193/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabriel-lima-developer)
