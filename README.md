# Teste para a Rota Exata

```bash
# Clone o repositório
$ git clone https://github.com/LucasSch2410/teste-rotaexata.git
```

---

# Variáveis de ambiente ENV

Algumas variáveis que definem como o projeto se comporta estão definidos no arquivo .env no diretório raiz do projeto. Por padrão o ambiente é de desenvolvimento e não de produção, então mensagens de erro são retornadas com mais detalhes. Se precisar alterar algo, verifique as informações no Dockerfile e docker-compose.yml para não quebrar a aplicação.

---

# Inicialização da aplicação
```bash
# Vá para o diretório do projeto
$ cd teste-rotaexata

# Faça a build da imagem
$ docker compose build

# Inicie os containers do banco de dados e da aplicação
$ docker compose up -d

# Crie o banco de dados se ainda não existir
$ docker exec crud-nodejs-server-1 npx sequelize-cli db:create

# Faça a migração das tabelas
$ docker exec crud-nodejs-server-1 npx sequelize-cli db:migrate

# Você poderá acessar as rotas a partir da seguinte url:
http://localhost:3333
```

---

# Documentação da API

## Endpoint: /user
Crie um usuário.

### Requisição
- **Método:** POST
- **URL:** `/user`
- **Headers:**
    ```http
    Content-Type: application/json
    ```

#### Corpo da Requisição(JSON):
```json
{
    "username": "string",
    "password": "string"
}
```

#### Retorno da Requisição(JSON):
```json
{
    "status": "success" || "fail" || "error",
    "data": {
        "id": "integer",
        "username": "string"
    }
}
```

## Endpoint: /login
Faça o login com um usuário e senha.

### Requisição
- **Método:** POST
- **URL:** `/login`
- **Headers:**
    ```http
    Content-Type: application/json
    ```

#### Corpo da Requisição(JSON):
```json
{
    "username": "string",
    "password": "string"
}
```

#### Retorno da Requisição(JSON):
```json
{
    "status": "success" || "fail" || "error",
    "data": {
        "token": "JWT"
    }
}
```


## Endpoint: /addresses
Registre um endereço.

### Requisição
- **Método:** POST
- **URL:** `/addresses`
- **Headers:**
    ```http
    Content-Type: application/json
    Authorization: Bearer <token>
    ```

#### Corpo da Requisição(JSON):
```json
{
  "cep": "string",
  "city": "string",
  "neighborhood": "string",
  "street": "string",
  "number_house": "string",
  "state_name": "string"
}
```

#### Retorno da Requisição(JSON):
```json
{
    "status": "success" || "fail" || "error",
    "data": {
        "id": "integer",
        "cep": "string",
        "city": "string",
        "neighborhood": "string",
        "street": "string",
        "number_house": "string",
        "state_name": "string",
        "createdBy": "string",
        "updatedAt": "date",
        "createdAt": "date",
        "deletedAt": "null"
    }
}
```

## Endpoint: /addresses
Retorne todos os seus endereços salvos ou com base em uma palavra-chave.

### Requisição
- **Método:** GET
- **URL:** `/addresses?keyword=<palavra-chave>`
- **Headers:**
    ```http
    Content-Type: application/json
    Authorization: Bearer <token>
    ```

#### Corpo da Requisição(JSON):
```json
{}
```

#### Retorno da Requisição(JSON):
```json
{
    "status": "success" || "fail" || "error",
    "data": {
        "id": "integer",
        "cep": "string",
        "city": "string",
        "neighborhood": "string",
        "street": "string",
        "number_house": "string",
        "state_name": "string",
        "createdBy": "string",
        "updatedAt": "date",
        "createdAt": "date",
        "deletedAt": "null"
    }
}
```

## Endpoint: /addresses/:id
Altere alguma informação em um endereço salvo.

### Requisição
- **Método:** PUT
- **URL:** `/addresses/:id`
- **Headers:**
    ```http
    Content-Type: application/json
    Authorization: Bearer <token>
    ```

#### Corpo da Requisição(JSON):
```json
{
  "cep": "string", // Opcional
  "city": "string", // Opcional
  "neighborhood": "string", // Opcional
  "street": "string", // Opcional
  "number_house": "string", // Opcional
  "state_name": "string" // Opcional
}
```

#### Retorno da Requisição(JSON):
```json
{
    "status": "success" || "fail" || "error",
    "data": {
        "id": "integer",
        "cep": "string",
        "city": "string",
        "neighborhood": "string",
        "street": "string",
        "number_house": "string",
        "state_name": "string",
        "createdBy": "string",
        "updatedAt": "date",
        "createdAt": "date",
        "deletedAt": "null"
    }
}
```

## Endpoint: /addresses/:id
Delete algum endereço salvo.

### Requisição
- **Método:** DELETE
- **URL:** `/addresses/:id`
- **Headers:**
    ```http
    Content-Type: application/json
    Authorization: Bearer <token>
    ```

#### Corpo da Requisição(JSON):
```json
{}
```

#### Retorno da Requisição(JSON):
```json
{ "status": "success" || "fail" || "error" }
```










## Endpoint: /addresses/:id/share
Compartilhe o endereço com alguém por um tempo determinado.

### Requisição
- **Método:** DELETE
- **URL:** `/addresses/:id/share`
- **Headers:**
    ```http
    Content-Type: application/json
    Authorization: Bearer <token>
    ```

#### Corpo da Requisição(JSON):
```json
{
    "expirationTime": "string" // Opcional. Tempo para expirar a URL, o padrão é 1D (1 dia)
}
```

#### Retorno da Requisição(JSON):
```json
{
    "status": "success" || "fail" || "error",
    "url": "string" // Url acessável
}
```