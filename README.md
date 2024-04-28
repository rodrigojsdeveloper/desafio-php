# Desafio Backend

Este desafio é uma API desenvolvida com o framework Symfony e PHP que gerencia o cadastro de cidadãos e a atribuição de um Número de Identificação Social (NIS) a cada um deles. O NIS é gerado automaticamente para cada cidadão ao ser cadastrado.

## Funcionalidades

- **Cadastro de Cidadãos**: Cadastra um novo cidadão com um nome fornecido e gera um NIS.
- **Listagem de Cidadãos**: Lista todos os cidadãos cadastrados e seus NIS.
- **Pesquisa por NIS**: Permite buscar um cidadão pelo seu NIS.

## Pré-requisitos

- Docker
- Docker Compose
- PHP 8.0 ou superior
- Composer

## Configuração Inicial

Para rodar este projeto, siga os passos abaixo:

### Clonar o Repositório

Clone este repositório para sua máquina local usando:

```
https://github.com/rodrigojsdeveloper/desafio-php.git
```

## Rodando o projeto

Para iniciar o backend, execute no terminal:

```
php -S localhost:8000 -t public
```

Para iniciar o frontend, execute em outro terminal:

```
npm run dev
```

## Configuração do Ambiente com Docker

Para iniciar o ambiente em docker, execute:

```
docker-compose up --build
```

## Uso da API

A API está configurada para rodar na porta 8000. Abaixo estão os endpoints disponíveis:

POST /users

### Cria um novo cidadão.

#### Corpo da Requisição:
```
{
  "name": "Nome do Cidadão"
}
```

#### Resposta:
```
{
  "message": "Usuário criado com sucesso!",
  "user": {
    "id": 1,
    "name": "Nome do Cidadão",
    "nis": "12345678901"
  }
}
```

GET /users

### Lista todos os cidadãos cadastrados.

#### Resposta:
```
[
  {
    "id": 1,
    "name": "Nome do Cidadão",
    "nis": "12345678901"
  }
]
```

GET /users/search/{nis}

### Busca um cidadão pelo NIS.

##### Resposta:
```
{
  "id": 1,
  "name": "Nome do Cidadão",
  "nis": "12345678901"
}
```

<br/>
<p align="center">Desenvolvido por <a href="https://www.linkedin.com/in/rodrigojsdeveloper/">Rodrigo Silva</a>
</p>
