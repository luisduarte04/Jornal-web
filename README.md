# Jornal Web

Jornal Web é uma aplicação web desenvolvida para gerenciar notícias, permitindo que usuários autenticados criem, visualizem e gerenciem notícias. O projeto utiliza uma arquitetura backend baseada em Node.js e Prisma para manipulação do banco de dados.

---

## **Tecnologias Utilizadas**

- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express.js**: Framework para criação de APIs REST.
- **Prisma**: ORM para interação com o banco de dados.
- **JWT (JSON Web Token)**: Para autenticação e autorização de usuários.
- **Bcrypt**: Para hash de senhas.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

---

## **Funcionalidades**

### **Autenticação**
- Login de usuários com validação de email e senha.
- Geração de JWT no login para autenticação de rotas protegidas.

### **Gerenciamento de Notícias**
- Criação de notícias associadas ao usuário autenticado.
- Paginação e ordenação de notícias.
- Retorno do `userId` como JWT para maior segurança.

### **Middleware de Autenticação**
- Validação do JWT enviado no cabeçalho `Authorization`.
- Extração do `userId` do token para uso nas rotas protegidas.

---

## **Estrutura do Projeto**

```plaintext
backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js   # Controlador de autenticação
│   │   ├── news.controller.js   # Controlador de notícias
│   ├── middlewares/
│   │   ├── auth.middleware.js   # Middleware para validação de JWT
│   ├── services/
│   │   ├── auth.service.js      # Lógica de autenticação
│   │   ├── news.service.js      # Lógica de gerenciamento de notícias
│   ├── utils/
│   │   ├── jwt.utils.js         # Função para geração de tokens JWT
│   ├── database/
│   │   ├── bd.js                # Configuração do Prisma e conexão ao banco
├── package.json                 # Dependências do projeto
```

---

## **Configuração do Projeto**

### **Pré-requisitos**
- Node.js instalado na máquina.
- Banco de dados configurado (compatível com Prisma).

### **Passos para Configuração**
1. Clone o repositório:
   ```bash
   git clone https://github.com/luisduarte04/Jornal-web.git
   ```

2. Instale as dependências:
   ```bash
   cd backend
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
     ```env
     JWT=seu_segredo_jwt
     DATABASE_URL=sua_url_do_banco_de_dados
     ```

4. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

## **Uso da API**

### **Rotas Disponíveis**

#### **Autenticação**
- **POST /login**: Realiza o login do usuário e retorna um JWT.
  - **Body**:
    ```json
    {
      "email": "usuario@email.com",
      "password": "senha"
    }
    ```

#### **Notícias**
- **GET /news**: Retorna uma lista de notícias com paginação.
  - **Query Params**:
    - `limit`: Número de notícias por página.
    - `offset`: Posição inicial para paginação.

- **POST /news**: Cria uma nova notícia (rota protegida).
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body**:
    ```json
    {
      "title": "Título da notícia",
      "text": "Conteúdo da notícia",
      "banner": "URL do banner"
    }
    ```

---

## **Considerações Finais**

Este projeto foi desenvolvido com foco em boas práticas de autenticação e gerenciamento de dados. O uso de JWT garante segurança e escalabilidade, enquanto o Prisma simplifica a interação com o banco de dados.

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests no repositório.

---

**Autor**: [Luis Duarte](https://github.com/luisduarte04)
