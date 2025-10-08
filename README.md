# Sistema de Controle de Acesso - CheckPoint FIAP

Este projeto foi desenvolvido como parte do CheckPoint da FIAP para a matéria de front-end. A aplicação consiste em um sistema simples de controle de acesso de usuários, implementando funcionalidades de cadastro e login, utilizando React, Vite e TypeScript.

A autenticação é validada contra um mock backend criado com `json-server`, e a sessão do usuário é gerenciada através da `sessionStorage` do navegador.

## 🚀 Funcionalidades

* **Tela de Login**: Permite que um usuário existente acesse o sistema com `nomeUsuario` e `email`.
* **Tela de Cadastro**: Permite que um novo usuário se cadastre. O sistema valida se o `nomeUsuario` ou `email` já existem para evitar duplicidade.
* **Página Home Protegida**: Uma página principal que só pode ser acessada após um login bem-sucedido.
* **Exibição de Dados do Usuário**: A página Home exibe o nome e o email do usuário logado.
* **Funcionalidade de Logout**: O usuário pode sair do sistema, limpando sua sessão.
* **Validação de Formulário**: Todos os campos dos formulários de login e cadastro são validados com `react-hook-form`.
* **Notificações Customizadas**: Alertas estilizados com Tailwind CSS são usados para fornecer feedback ao usuário (sucesso, erro, etc.).
* **Componentes Reutilizáveis**: A estrutura do projeto utiliza componentes genéricos para formulários e alertas, promovendo a reutilização de código.

## 🛠️ Tecnologias Utilizadas

* **Vite**: Build tool para um desenvolvimento front-end rápido.
* **React**: Biblioteca para construção da interface de usuário.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **Tailwind CSS**: Framework de CSS utility-first para estilização.
* **React Router DOM**: Para gerenciamento de rotas e navegação (SPA).
* **React Hook Form**: Para validação e gerenciamento de formulários.
* **json-server**: Para criar um mock backend RESTful a partir de um arquivo `db.json`.

## ⚙️ Configuração e Instalação

Siga os passos abaixo para rodar o projeto localmente.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd access-control-cp
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a seguinte linha:
    ```
    VITE_API_URL_BASE=http://localhost:3000/usuarios
    ```

4.  **Inicie os servidores (requer 2 terminais):**

    * **No primeiro terminal**, inicie o mock backend (`json-server`):
        ```bash
        npm run api
        ```
        *Deixe este terminal rodando.*

    * **No segundo terminal**, inicie a aplicação React (Vite):
        ```bash
        npm run dev
        ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal do Vite).

## 👥 Integrantes do Grupo

* **Nome:** [Nome Completo do Aluno] - **RM:** [Seu RM]
* **Nome:** [Nome Completo do Aluno] - **RM:** [Seu RM]
* **Nome:** [Nome Completo do Aluno] - **RM:** [Seu RM]
* **Nome:** [Nome Completo do Aluno] - **RM:** [Seu RM]

## 👥 Integrantes

| Nome | RM | Turma | GitHub | LinkedIn |
| :--- | :--- | :--- | :--- | :--- |
| Diego Andrade | 566385 | 1TDSPO | [diandrade](https://github.com/diandrade) | [LinkedIn](https://www.linkedin.com/in/andradedossantosdiego/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) |
| Grazielle Alencar | 561529 | 1TDSPO | [grazialencar](https://github.com/grazialencar) | [LinkedIn](https://www.linkedin.com/in/grazielle-alencar/) |
| Isabela Yamauchi | 560310 | 1TDSPO | [IsabelaYamauchi](https://github.com/IsabelaYamauchi) | [LinkedIn](https://www.linkedin.com/in/isabelayamauchi/) |

---

## Repositório no GitHub

🔗 [https://github.com/FIAP-AURAMED/access-control-cp.git](https://github.com/FIAP-AURAMED/access-control-cp.git) 