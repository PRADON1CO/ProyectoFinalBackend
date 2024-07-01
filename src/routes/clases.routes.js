import { Router } from "express";
import {
  CrearClase,
  borraClase,
  editarClase,
  listarClases,
  obtenerClase,
} from "../controllers/clases.controllers.js";
import validacionClase from "../helpers/validaionClase.js";

const router = Router();

router.route("/prueba").get(listarClases);
router
  .route("/clases")
  .post(
    [validacionClase],
    CrearClase
  )
  .get(listarClases);
router
  .route("/clases/:id")
  .get(obtenerClase)
  .put(editarClase)
  .delete(borraClase);

export default router;
