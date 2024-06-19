<h1 align="center"> 
	🚧 Dashboard de Produtos 🚧
</h1>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p>

---

## 💻 Sobre o projeto

📄 Este é um dashboard desenvolvido em Angular 17 para consumir a API <a href="https://fakeapi.platzi.com/">Fake Platzi API<a/>. <br>
A aplicação permite ao usuário navegar pelos produtos e categorias registrados na API, com algumas funcionalidades como busca, filtro e paginação.

---

## ⚙️ Funcionalidades

- [x] Login com dados mockados, utilize: (user: <b>l5networks</b>, password: <b>l5networks</b>)
- [x] Listagem de produtos e categorias, com requisições à API utilizando Observable do RXJS.
- [x] Detalhes dos produtos, utilizando rotas dinâmicas.
- [x] Filtro dos produtos, com base em sua categoria, utilizando a barra lateral.
- [x] Pesquisa de produto pelo nome, utilizando o input de texto.
- [x] Paginação com scroll infinito, utilizando a biblioteca <a href="https://www.npmjs.com/package/ngx-infinite-scroll">ngx-infinite-scroll</a>.
- [x] Toggle menu em telas menores, exibindo as páginas e os filtros.
- [x] Card placeholder dinâmico, que aparece enquanto a API não retorna os dados.

## 🎨 Layout

Na estilização foi utilizada a biblioteca <a href="https://getbootstrap.com/">Bootstrap</a> na versão v5.3, facilitando na responsividade da aplicação.<br>
O design foi desenvolvido por mim, com base em algumas referências encontradas.<br>
Optei pelo tema dark para diminuir o cansaço visual do usuário.

---

## 🛣️ Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/), por exemplo.


#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone git@github.com:LuscaMelo/products-dashboard.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd products-dashboard

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# A aplicação será aberta na porta:4200 - acesse no navegador http://localhost:4200

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

####

**Tecnologias**  
-   **[Angular 17+](https://angular.dev/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[Bootstrap](https://getbootstrap.com/)**
-   **[Ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll)**


#### **Utilitários**

-   API:  **[Fake Platzi API](https://fakeapi.platzi.com/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**


---


## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🧙‍♂️ Autor

Feito com ❤️ por Lucas Melo 👋🏽 [Entre em contato!](https://www.linkedin.com/in/lucasmelodesenvolvedor/)
 <br />


