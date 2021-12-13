# 1º Hackathon Trybe - Grupo 2

Esta API REST disponibiliza acesso às entidades usuários, parceiros e posts da aplicação [nomeAplicacao](https://www.linkparaaplicacao.com.br).

## Documentação

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

### Parceiros

1. GET /partner

	Consulta todos os parceiros
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b6582576da8df9de74fbe4",
	    "title": "Parceiro",
	    "address": "Avenida Sanitária, 502",
	    "city": "Belo Horizonte",
	    "state": "MG",
	    "picture": "URL",
	    "description": "Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH",
	    "type": "Hospedagem",
	    "posts": [
	      {
	        "_id": "61b6598776da8df9de74fbe7",
	        "grades": {
	          "distancingAviability": 3,
	          "alcoholAviability": 4,
	          "cleanliness": 2,
	          "maskUsage": 8
	        },
	        "userId": "61b6589f76da8df9de74fbe5",
	        "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	        "partnerId": "61b6582576da8df9de74fbe4",
	        "postedAt": "2021-12-12T20:20:23.509Z"
	      }
	    ],
	    "avgRating": {
	      "avgTotal": "4.3",
	      "avgDistancingAviability": "3.0",
	      "avgAlcoholAviability": "4.0",
	      "avgCleanliness": "2.0",
	      "avgMaskUsage": "8.0"
	    }
	  }
	]
	```
2. GET /partner/:id

	Consulta parceiro pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6582576da8df9de74fbe4",
	  "title": "Parceiro",
	  "address": "Avenida Sanitária, 502",
	  "city": "Belo Horizonte",
	  "state": "MG",
	  "picture": "URL",
	  "description": "Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH",
	  "type": "Hospedagem",
	  "posts": [
	    {
	      "_id": "61b6598776da8df9de74fbe7",
	      "grades": {
	        "distancingAviability": 3,
	        "alcoholAviability": 4,
	        "cleanliness": 2,
	        "maskUsage": 8
	      },
	      "userId": "61b6589f76da8df9de74fbe5",
	      "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	      "partnerId": "61b6582576da8df9de74fbe4",
	      "postedAt": "2021-12-12T20:20:23.509Z"
	    }
	  ],
	  "avgRating": {
	    "avgTotal": "4.3",
	    "avgDistancingAviability": "3.0",
	    "avgAlcoholAviability": "4.0",
	    "avgCleanliness": "2.0",
	    "avgMaskUsage": "8.0"
	  }
	}
	```
3. POST /partner/

	Cria novo parceiro
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6582576da8df9de74fbe4",
	  "title": "Parceiro",
	  "address": "Avenida Sanitária, 502",
	  "city": "Belo Horizonte",
	  "state": "MG",
	  "picture": "URL",
	  "description": "Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH",
	  "type": "Hospedagem",
	  "posts": [],
	  "avgRating": {}
	}
	```
4. PUT /parceiro/:id

	Atualiza parceiro pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6582576da8df9de74fbe4",
	  "title": "Parceiro 2",
	  "address": "Avenida Sanitária, 502",
	  "city": "Belo Horizonte",
	  "state": "MG",
	  "picture": "URL",
	  "description": "Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH Hotel localizado na zona central de BH",
	  "type": "Hospedagem"
	}
	```
4. DELETE /partner/:id

	Deleta parceiro pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "message": "Parceiro removido"
	}
	```
### Posts

1. GET /post

	Consulta todos os posts
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b6598776da8df9de74fbe7",
	    "grades": {
	      "distancingAviability": 3,
	      "alcoholAviability": 4,
	      "cleanliness": 2,
	      "maskUsage": 8
	    },
	    "userId": "61b6589f76da8df9de74fbe5",
	    "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	    "partnerId": "61b6582576da8df9de74fbe4",
	    "postedAt": "2021-12-12T20:20:23.509Z"
	  }
	]	
	```
2. GET /post/:id

	Consulta post pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6598776da8df9de74fbe7",
	  "grades": {
	    "distancingAviability": 3,
	    "alcoholAviability": 4,
	    "cleanliness": 2,
	    "maskUsage": 8
	  },
	  "userId": "61b6589f76da8df9de74fbe5",
	  "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	  "partnerId": "61b6582576da8df9de74fbe4",
	  "postedAt": "2021-12-12T20:20:23.509Z"
	}
	```
3. GET /post/:id/partnerPosts

	Consulta posts de parceiro pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b6598776da8df9de74fbe7",
	    "grades": {
	      "distancingAviability": 3,
	      "alcoholAviability": 4,
	      "cleanliness": 2,
	      "maskUsage": 8
	    },
	    "userId": "61b6589f76da8df9de74fbe5",
	    "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	    "partnerId": "61b6582576da8df9de74fbe4",
	    "postedAt": "2021-12-12T20:20:23.509Z"
	  }
	]
	```
4. POST /post/

	Cria novo post
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6598776da8df9de74fbe7",
	  "grades": {
	    "distancingAviability": 3,
	    "alcoholAviability": 4,
	    "cleanliness": 2,
	    "maskUsage": 8
	  },
	  "userId": "61b6589f76da8df9de74fbe5",
	  "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	  "partnerId": "61b6582576da8df9de74fbe4",
	  "postedAt": "2021-12-12T20:20:23.509Z"
	}
	```
5. PUT /post/:id

	Atualiza post pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b50e8bed54e5bbf5b70ef5",
	  "grades": {
	    "distancingAviability": 2,
	    "alcoholAviability": 1,
	    "cleanliness": 1,
	    "maskUsage": 1
	  },
	  "userId": "123",
	  "comment": "teste teste teste teste teste teste teste teste teste teste teste teste teste ",
	  "partnerId": "61b50e8bed54e5bbf5b70ef5"
	}
	```
6. DELETE /post/:id

	Deleta post pelo ID
	
	- Request (aplication/json):
		- Headers
		
			`  Authorization: Bearer [access_token]`
			
	- Response 200 (application/json)
	```
	{
	  "message": "Post removido"
	}
	```
