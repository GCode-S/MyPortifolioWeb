# MyPortifolioWeb

Portfólio pessoal desenvolvido com [Next.js](https://nextjs.org/) e React, apresentando projetos, tecnologias dominadas e formas de contato. O design é moderno, responsivo e inclui animações para uma experiência visual diferenciada.

## Demonstração

![Screenshot do Portfólio](public/bg-header.png)

## Funcionalidades

- **Página Inicial:** Apresentação do desenvolvedor com animação de estrelas.
- **Sobre:** Breve descrição da trajetória, habilidades e experiência.
- **Projetos:** Cards com detalhes dos principais projetos, links para repositórios e demonstrações.
- **Stack:** Tecnologias utilizadas, exibidas com ícones animados.
- **Contato:** Botões para WhatsApp, GitHub e E-mail.
- **Responsividade:** Layout adaptado para desktop, tablet e mobile.
- **Animações:** Efeitos de fade e movimento ao rolar a página.

## Estrutura de Pastas

```
src/
  app/
    pages/
      home/
        page.jsx
        styles.css
    layout.js
    globals.css
    page.js
public/
  bg-header.png
  bg-footer.png
  bg-stack.png
  stack.png
  git.png
  github.png
  js.png
  native.png
  node.png
  react.png
  wpp.png
  email.png
```

## Principais Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (configurado em [`postcss.config.mjs`](postcss.config.mjs))
- CSS customizado ([`src/app/pages/home/styles.css`](src/app/pages/home/styles.css))

## Como executar

Clone o repositório:

```sh
git clone https://github.com/GCode-S/MyPortifolioWeb.git
cd MyPortifolioWeb
```

Instale as dependências:

```sh
npm install
```

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Principais arquivos

- [`src/app/pages/home/page.jsx`](src/app/pages/home/page.jsx): Página principal do portfólio.
- [`src/app/pages/home/styles.css`](src/app/pages/home/styles.css): Estilos customizados e animações.
- [`src/app/layout.js`](src/app/layout.js): Layout global e fontes.
- [`src/app/globals.css`](src/app/globals.css): Estilos globais e configuração de Tailwind.
- [`package.json`](package.json): Dependências e scripts.

## Projetos em destaque

- **Controll-Fornecedor:** Sistema para cadastro e gerenciamento de fornecedores e produtos.
  - [Repositório](https://github.com/GCode-S/Controll-Fornecedor)
  - [Demo](https://inquisitive-croquembouche-d8a8e4.netlify.app/html/home/home.html)

- **Landing Page Catálogo Lash Designer:** Página moderna e responsiva para apresentação de catálogo.
  - [Repositório](https://github.com/GCode-S/LandingPage-Catalago-StefaniLash)
  - [Demo](https://gcode-s.github.io/LandingPage-Catalago-StefaniLash/)

## Contato

- [WhatsApp](https://wa.me/5534988611665)
- [GitHub](https://github.com/GCode-S)
- [E-mail](mailto:gabriel.c.souza001@gmail.com)

---

&copy; GCode-S