const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

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

// Sessions
routes.post("/sessions", SessionController.create);

// ONGs
routes.get("/ongs", OngController.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whattsapp: Joi.number()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

// Profile
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

// Incidents
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number()
        .required()
        .greater(0)
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

module.exports = routes;
