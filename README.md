# 1º Hackathon Trybe - Grupo 2

Esta API REST disponibiliza acesso a informações sobre as entidades usuários, parceiros e posts da aplicação [Safe Route](https://grupo2-backend.herokuapp.com/).

## Sumário

- [Instruções](#instruções)

- [Documentação](#documentação)
	- [Métodos](#métodos) 
	- [respostas](#respostas)
	- [EndPoints](#usuários)
		- [Usuários](#usuários)
		- [Login](#login)
		- [Parceiros](#parceiros)
		- [Posts](#posts)

## Instruções

1. Clone o repositório
	```
	git clone git@github.com:samuel-constantino/hackathon-trybe.git
	```

	Entre na pasta do repositório que você acabou de clonar:
	
	```
	cd hackathon-trybe
	```

	Instale as dependências:

	```
	npm install
	```

2. Rode a aplicação

	```
	npm start
	```

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
| `200` | Requisição executada com sucesso (Success).|
| `201` | Registro criado com sucesso (Created).|
| `400` | Dados da requisição mal formados (Bad request).|
| `401` | Usuário não autorizado (Unauthorized).|
| `404` | Registro pesquisado não encontrado (Not found).|

### Endpoints

### Usuários

1. **GET /user**

	Consulta todos os usuários
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b76863e4d1fae6b389c3f9",
	    "name": "Joana Couto",
	    "description": "Procuro Aventuras!",
	    "picture": "https://res.cloudinary.com/grupo2/image/upload/v1639409763/xskwvispn0xe1bxgcdra.jpg",
	    "email": "joana.couto@hackathon.com"
	  },
	  {
	    "_id": "61b769bee4d1fae6b389c3fa",
	    "name": "Bruno Couto",
	    "description": "Só viagens a negócios.",
	    "picture": "https://res.cloudinary.com/grupo2/image/upload/v1639410110/gvm84uve3ks1ngbezeqh.jpg",
	    "email": "Brunao182@ghack.com.br"
	  }
  	]
	```
2. **GET /user/:id**

	Consulta usuário pelo ID
			
	- Response 200 (application/json)
	```
	{
	    "_id": "61b76863e4d1fae6b389c3f9",
	    "name": "Joana Couto",
	    "description": "Procuro Aventuras!",
	    "picture": "https://res.cloudinary.com/grupo2/image/upload/v1639409763/xskwvispn0xe1bxgcdra.jpg",
	    "email": "joana.couto@hackathon.com"
	}
	```
3. **POST /user/**

	Cria novo usuário
	
	- Request (application/json)
		- Headers:
			- authorization: JWT Token
		-Body:
	```
	{
	  "name": (string),
	  "description": (string),
	  "picture": (string),
	  "email": (string),
	  "password": (string)
	}
	```
			
	- Response 201 (application/json)
	```
	{
	  "_id": "61b7bb1018fd3128e58efc88",
	  "name": "Samuel",
	  "description": "Estudante de Desenvolvimento Web na Trybe, escola que ensia a programar e aprender",
	  "picture": "https://lever-client-logos.s3.us-west-2.amazonaws.com/1ecf7375-9cc9-4b3d-ba9a-c1cdcab267b5-1637340547280.png",
	  "email": "samuel@trybe.com",
	  "role": "user"
	}
	```
4. **PUT /user/:id**

	Atualiza usuário pelo ID

	- Request (application/json)
		- Headers:
			- authorization: JWT Token
		- Body:
	```
	{
	  "name": (string),
	  "description": (string),
	  "picture": (string),
	  "email": (string),
	  "password": (string)
	}
	```
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6616bad3de0dc445ef399",
	  "name": "Tryber",
	  "description": "Estudante de Desenvolvimento Web na Trybe, escola que ensia a programar e aprender",
	  "picture": "URL",
	  "email": "tryber@trybe.com",
	  "role": "user"
	}
	```
4. **DELETE /user/:id**

	Deleta usuário pelo ID
			
	- Response 200 (application/json)
	```
	{
	  "message": "Usuário removido"
	}
	```

### Login

1. **POST /login**

	Área de login do usuário
	
	- Request (application/json)
		-Body:
	```
	{
	  "email": (string),
	  "password": (string),
	}
	```
	
	- Response 200 (application/json)
	```
	{
	  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxYjdhYTlkMjc4MzBjNDg0YjA2Njc4MyIsIm5hbWUiOiJUcnliZXIiLCJlbWFpbCI6InRyeWJlckB0cnliZS5jb20ifSwiaWF0IjoxNjM5NDM3MjU0LCJleHAiOjE2Mzk1MjM2NTR9.AJVVDHy3Q_DBpgpN2d8DqyOiFsvHCMw-UxAW4Lqe2TA"
	}
	```

### Parceiros

1. **GET /partner**

	Consulta todos os parceiros
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b74a4df39bd9734f713cf7",
	    "title": "Mineiros Beer",
	    "address": "Rua Romualdo Lopes Cançado, 399 - Castelo",
	    "city": "Belo Horizonte",
	    "state": "MG",
	    "picture": "https://res.cloudinary.com/grupo2/image/upload/v1639402060/whwpzztqdmafec6ca8bq.jpg",
	    "description": "Restaurante localizado na região da Pampulha, com grande variedade de carnes e cervejas. Almoço todos os dias da semana e clima descontraído nas noites de quarta a sábado.",
	    "type": "Restaurante",
	    "posts": [
	      {
		"_id": "61b77c4c5994f892cea6d579",
		"grades": {
		  "distancingAviability": 4,
		  "alcoholAviability": 2,
		  "cleanliness": 2,
		  "maskUsage": 3
		},
		"userId": "61b76863e4d1fae6b389c3f9",
		"comment": "O restaurante fornece alcool em gel somente na entrada, as mesas não são limpas com frequência e a sensação de limpeza dentro do banheiro é bem baixa, quando fui estava faltando papel para secar as mãos. O staff usa máscara durante todo o tempo e solicitam que os clientes usem para trafegar nas áreas do restaurante.",
		"partnerId": "61b74a4df39bd9734f713cf7",
		"postedAt": "2021-12-13T17:01:00.038Z"
	      },
	      {
		"_id": "61b7847e5994f892cea6d593",
		"grades": {
		  "distancingAviability": 5,
		  "alcoholAviability": 4,
		  "cleanliness": 4,
		  "maskUsage": 5
		},
		"userId": "61b76b17e4d1fae6b389c3fd",
		"comment": "Amei o lugar, e a limpeza é muito boa. Recomendo.",
		"partnerId": "61b74a4df39bd9734f713cf7",
		"postedAt": "2021-12-13T17:35:58.571Z"
	      }
	    ],
	    "avgRating": {
	      "avgTotal": "3.6",
	      "avgDistancingAviability": "4.5",
	      "avgAlcoholAviability": "3.0",
	      "avgCleanliness": "3.0",
	      "avgMaskUsage": "4.0"
	    }
	  },
	]
	```
2. **GET /partner/:id**

	Consulta parceiro pelo ID
			
	- Response 200 (application/json)
	```
	{
	    "_id": "61b74a4df39bd9734f713cf7",
	    "title": "Mineiros Beer",
	    "address": "Rua Romualdo Lopes Cançado, 399 - Castelo",
	    "city": "Belo Horizonte",
	    "state": "MG",
	    "picture": "https://res.cloudinary.com/grupo2/image/upload/v1639402060/whwpzztqdmafec6ca8bq.jpg",
	    "description": "Restaurante localizado na região da Pampulha, com grande variedade de carnes e cervejas. Almoço todos os dias da semana e clima descontraído nas noites de quarta a sábado.",
	    "type": "Restaurante",
	    "posts": [
	      {
		"_id": "61b77c4c5994f892cea6d579",
		"grades": {
		  "distancingAviability": 4,
		  "alcoholAviability": 2,
		  "cleanliness": 2,
		  "maskUsage": 3
		},
		"userId": "61b76863e4d1fae6b389c3f9",
		"comment": "O restaurante fornece alcool em gel somente na entrada, as mesas não são limpas com frequência e a sensação de limpeza dentro do banheiro é bem baixa, quando fui estava faltando papel para secar as mãos. O staff usa máscara durante todo o tempo e solicitam que os clientes usem para trafegar nas áreas do restaurante.",
		"partnerId": "61b74a4df39bd9734f713cf7",
		"postedAt": "2021-12-13T17:01:00.038Z"
	      },
	      {
		"_id": "61b7847e5994f892cea6d593",
		"grades": {
		  "distancingAviability": 5,
		  "alcoholAviability": 4,
		  "cleanliness": 4,
		  "maskUsage": 5
		},
		"userId": "61b76b17e4d1fae6b389c3fd",
		"comment": "Amei o lugar, e a limpeza é muito boa. Recomendo.",
		"partnerId": "61b74a4df39bd9734f713cf7",
		"postedAt": "2021-12-13T17:35:58.571Z"
	      }
	    ],
	    "avgRating": {
	      "avgTotal": "3.6",
	      "avgDistancingAviability": "4.5",
	      "avgAlcoholAviability": "3.0",
	      "avgCleanliness": "3.0",
	      "avgMaskUsage": "4.0"
	    }
	  }
	```
3. **POST /partner/**

	Cria novo parceiro
	
	- Request (application/json)
		- Headers:
			- authorization: JWT Token
		-Body:
	```
	{
	  "title": (string),
	  "address": (string),
	  "city": (string), 
 	  "state": (string),
	  "picture": (string),
	  "description": (string),
	  "type": (string)
	}
	```
			
	- Response 201 (application/json)
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
4. **PUT /parceiro/:id**

	Atualiza parceiro pelo ID
	
	- Request (application/json)
		- Headers:
			- authorization: JWT Token
		-Body:
	```
	{
	  "title": (string),
	  "address": (string),
	  "city": (string), 
 	  "state": (string),
	  "picture": (string),
	  "description": (string),
	  "type": (string)
	}
	```
			
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
4. **DELETE /partner/:id**

	Deleta parceiro pelo ID
			
	- Response 200 (application/json)
	```
	{
	  "message": "Parceiro removido"
	}
	```
### Posts

1. **GET /post**

	Consulta todos os posts
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b6598776da8df9de74fbe7",
	    "grades": {
	      "distancingAviability": 3,
	      "alcoholAviability": 4,
	      "cleanliness": 2,
	      "maskUsage": 5
	    },
	    "userId": "61b6589f76da8df9de74fbe5",
	    "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	    "partnerId": "61b6582576da8df9de74fbe4",
	    "postedAt": "2021-12-12T20:20:23.509Z"
	  }
	]	
	```
2. **GET /post/:id**

	Consulta post pelo ID
			
	- Response 200 (application/json)
	```
	{
	  "_id": "61b6598776da8df9de74fbe7",
	  "grades": {
	    "distancingAviability": 3,
	    "alcoholAviability": 4,
	    "cleanliness": 2,
	    "maskUsage": 5
	  },
	  "userId": "61b6589f76da8df9de74fbe5",
	  "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	  "partnerId": "61b6582576da8df9de74fbe4",
	  "postedAt": "2021-12-12T20:20:23.509Z"
	}
	```
3. **GET /post/:id/partnerPosts**

	Consulta posts de parceiro pelo ID
			
	- Response 200 (application/json)
	```
	[
	  {
	    "_id": "61b6598776da8df9de74fbe7",
	    "grades": {
	      "distancingAviability": 3,
	      "alcoholAviability": 4,
	      "cleanliness": 2,
	      "maskUsage": 5
	    },
	    "userId": "61b6589f76da8df9de74fbe5",
	    "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	    "partnerId": "61b6582576da8df9de74fbe4",
	    "postedAt": "2021-12-12T20:20:23.509Z"
	  }
	]
	```
4. **POST /post/**

	Cria novo post
	
	- Request (application/json)
		- Headers:
			- authorization: JWT Token
		-Body:
	```
	{
	  "grades": {
	    "distancingAviability": (number),
	    "alcoholAviability": (number),
	    "cleanliness": (number),
	    "maskUsage": (number)
	},
		"userId": (string),
		"comment": (string)
	}
	```		
	- Response 201 (application/json)
	```
	{
	  "_id": "61b6598776da8df9de74fbe7",
	  "grades": {
	    "distancingAviability": 3,
	    "alcoholAviability": 4,
	    "cleanliness": 2,
	    "maskUsage": 5
	  },
	  "userId": "61b6589f76da8df9de74fbe5",
	  "comment": "Ótima hospedagem, lugar muito higiêncio, recomendo demais!!!",
	  "partnerId": "61b6582576da8df9de74fbe4",
	  "postedAt": "2021-12-12T20:20:23.509Z"
	}
	```
5. **PUT /post/:id**

	Atualiza post pelo ID
	
	- Request (application/json)
		- Headers:
			- authorization: JWT Token
		-Body:
	```
	{
	  "grades": {
	    "distancingAviability": (number),
	    "alcoholAviability": (number),
	    "cleanliness": (number),
	    "maskUsage": (number)
	},
		"userId": (string),
		"comment": (string)
	}
	```
			
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
	  "userId": "61b6589f76da8df9de74fbe5",
	  "comment": "Local muito agradável, com banheiros limpos e disponibilidade de álcool em gel em todos os cômudos. ",
	  "partnerId": "61b50e8bed54e5bbf5b70ef5"
	}
	```
6. **DELETE /post/:id**

	Deleta post pelo ID
			
	- Response 200 (application/json)
	```
	{
	  "message": "Post removido"
	}
	```
