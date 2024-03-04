import route from "express";
import userController from "../controllers/user.controller.js";

const routes = route.Router();

routes.get("/verificar-validade/:idUsuario", userController.findAll);

export default routes;
