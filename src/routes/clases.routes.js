import { Router } from "express";
import { listarProductos } from "../controllers/clases.controllers.js";

const router = Router();

//creo rutas
router.route('/prueba').get(listarProductos);

export default router;