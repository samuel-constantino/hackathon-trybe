# 1º Hackathon Trybe - Grupo 2

A [nomeAplicacao](https://www.linkparaaplicacao.com.br) disponibiliza uma API REST que permite o acesso aos usuários, parceiros e posts.

## Documentation

### Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


### Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `500` | Erro interno do sistema|

### Endpoints

### Usuários

1. GET /user

	Consulta todos os usuários
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b6589f76da8df9de74fbe5",
	    "name": "Tryber",
	    "description": "Estudante de Desenvolvimento Web na Trybe, escola que ensia a programar e aprender",
	    "picture": "URL",
	    "email": "tryber@trybe.com"
	  }
	]
	```
2. GET /user/:id

	Consulta usuário pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6589f76da8df9de74fbe5",
	  "name": "Tryber",
	  "description": "Estudante de Desenvolvimento Web na Trybe, escola que ensia a programar e aprender",
	  "picture": "URL",
	  "email": "tryber@trybe.com",
	  "password": "123456"
	}
	```
3. POST /user/

	Cria novo usuário
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6616bad3de0dc445ef399",
	  "name": "Tryber",
	  "description": "Estudante de Desenvolvimento Web na Trybe, escola que ensia a programar e aprender",
	  "picture": "URL",
	  "email": "tryber@trybe.com"
	}
	```
4. PUT /user/:id

	Atualiza usuário pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6616bad3de0dc445ef399",
	  "name": "Tryber",
	  "description": "Estudante de Desenvolvimento Web na Trybe, escola que ensia a programar e aprender",
	  "picture": "URL",
	  "email": "tryber@trybe.com"
	}
	```
4. DELETE /user/:id

	Deleta usuário pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "message": "Usuário deletado"
	}
	```