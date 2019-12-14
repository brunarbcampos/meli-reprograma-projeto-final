define({ "api": [
  {
    "type": "delete",
    "url": "/destinos/deleteDestino",
    "title": "DELETE - apaga um destino aleatório",
    "name": "deleteDestino",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Delete",
            "optional": false,
            "field": "Destinos",
            "description": "<p>Deleta um destino específico</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DELETE",
            "description": "<p>deleta um destino específico</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"destino excluído com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DestinoNotFound",
            "description": "<p>Nenhum destino encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"DestinoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  },
  {
    "type": "get",
    "url": "/destinos/:clima",
    "title": "GET - destinos de um clima igual",
    "name": "getClima",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Get",
            "optional": false,
            "field": "Destinos",
            "description": "<p>Traz os destinos pelo clima especificado na array</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GET",
            "description": "<p>Traz todos os destinos com o clima especificado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cidade\": \"nome da cidade\",\n  \"estado\": \"nome do estado\",\n  \"clima\": \"tipo de clima\",\n  \"pontosTuristicos\": \"nome do atrativo\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClimaNotFound",
            "description": "<p>Clima não cadastrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimaNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  },
  {
    "type": "get",
    "url": "/destinos",
    "title": "GET - todos os destinos cadastrados",
    "name": "getDestinos",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Get",
            "optional": false,
            "field": "Destinos",
            "description": "<p>Traz os destinos cadastrados</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GET",
            "description": "<p>Traz a lista de todos os destinos cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cidade\": \"nome da cidade\",\n  \"estado\": \"nome do estado\",\n  \"clima\": \"tipo de clima\",\n  \"pontosTuristicos\": \"nome do atrativo\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  },
  {
    "type": "post",
    "url": "/destinos",
    "title": "POST - Insere um novo destino",
    "name": "getPost",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Post",
            "optional": false,
            "field": "Destinos",
            "description": "<p>Insere um array de um novo destino</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "POST",
            "description": "<p>Insere um array de um novo destino</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  Novo destino inserido com sucesso!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DestinoExistent",
            "description": "<p>Destino já cadastrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"DestinoExistent\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  },
  {
    "type": "get",
    "url": "/destinos/random",
    "title": "GET - um destino aleatório",
    "name": "getRandom",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Get",
            "optional": false,
            "field": "Destinos",
            "description": "<p>Mostra uma array de destino aleatório</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GET",
            "description": "<p>Mostra uma array de destino aleatório</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cidade\": \"nome da cidade\",\n  \"estado\": \"nome do estado\",\n  \"clima\": \"tipo de clima\",\n  \"pontosTuristicos\": \"nome do atrativo\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  },
  {
    "type": "get",
    "url": "/destinos/:estados",
    "title": "get - destinos do mesmo Estado",
    "name": "getRandom",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Get",
            "optional": false,
            "field": "Destinos",
            "description": "<p>percorre todos os destinos e traz todos com o estado em comum pedido</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GET",
            "description": "<p>mostra todos os arrays que possuem o mesmo estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cidade\": \"nome da cidade\",\n  \"estado\": \"nome do estado\",\n  \"clima\": \"tipo de clima\",\n  \"pontosTuristicos\": \"nome do atrativo\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EstadoNotFound",
            "description": "<p>Nenhum estado encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EstadoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  },
  {
    "type": "put",
    "url": "/destinos/putDestino",
    "title": "PUT - atualiza um destino",
    "name": "putDestino",
    "group": "Destinos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Put",
            "optional": false,
            "field": "Destinos",
            "description": "<p>Atualiza um destino específico</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "atualiza",
            "description": "<p>uma array específica</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  Destino atualizado com sucesso!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DestinoNotFound",
            "description": "<p>Destino não encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"DestinoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/destinoRoute.js",
    "groupTitle": "Destinos"
  }
] });
