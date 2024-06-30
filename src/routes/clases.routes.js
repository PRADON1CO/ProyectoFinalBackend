import { Router } from "express";
import { CrearClase, listarClases, obtenerClase } from "../controllers/clases.controllers.js";

const router = Router();

//creo rutas
router.route('/prueba').get(listarClases);
router.route('/clases').post(CrearClase).get(listarClases).put().delete()
router.route('/clases/:id').get(obtenerClase)

export default router