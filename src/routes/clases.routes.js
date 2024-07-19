import { Router } from "express";
import {
  CrearClase,
  borraClase,
  editarClase,
  listarClases,
  obtenerClase,
} from "../controllers/clases.controllers.js";
import validacionClase from "../helpers/validaionClase.js";
import verificarJWT from "../helpers/verificarJWT.js"

const router = Router();

router.route("/prueba").get(listarClases);
router
  .route("/clases")
  .post(
    [verificarJWT, validacionClase],
    CrearClase
  )
  .get(listarClases);
router
  .route("/clases/:id")
  .get(obtenerClase)
  .put([verificarJWT, validacionClase],editarClase)
  .delete([verificarJWT],borraClase);

export default router;
