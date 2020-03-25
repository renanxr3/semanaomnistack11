const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

/*
  Métodos HTTP:

  GET: Buscar uma informação no backend
  POST: Criar  uma informação no backend
  PUT: Alterar  uma informação no backend
  DELETE: Deletar  uma informação no backend
*/

/*
  Tipos de Parametros:

  Query Params: parametros nomeados enviados na rota após "?" (filtros, paginação)
  Route Params: Parametros utilizados para identificar recursos
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

routes.get("/users", (request, response) => {
  return response.json({
    evento: "Semana Omnistack 11",
    aluno: "Renan"
  });
});

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
