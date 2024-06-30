import { Router } from "express";
import { CrearClase, listarClases } from "../controllers/clases.controllers.js";

const router = Router();

//creo rutas
router.route('/prueba').get(listarClases);
router.route('/clases').post(CrearClase)

export default router