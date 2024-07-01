import { Router } from "express";
import { CrearClase, borraClase, editarClase, listarClases, obtenerClase } from "../controllers/clases.controllers.js";

const router = Router();

//creo rutas
router.route('/prueba').get(listarClases);
router.route('/clases').post(CrearClase).get(listarClases)
router.route('/clases/:id').get(obtenerClase).put(editarClase).delete(borraClase)

export default router