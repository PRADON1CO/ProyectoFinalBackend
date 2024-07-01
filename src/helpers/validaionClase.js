import { check } from "express-validator"
import resultadoValidacion from "./resultadoValidacion.js"

const validacionClase = [
    check("nombreClase")
        .notEmpty()
        .withMessage("El nombre de la clase es obligatoria")
        .isLength({ min:2 , max:50 })
        .withMessage("El nombre de la clase debe tener entre 2 y 50 carecteres"),
    check("nombreProfesor")
        .notEmpty()
        .withMessage("El nombre del profesor es obligatorio")
        .isLength({ min:2, max:50})
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    check("imagen")
        .notEmpty()
        .withMessage("La imagen del instructor es un dato obligatorio")
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
        .withMessage("La imagen debe ser una url valida y debe terminar en los siguientes formatos (jpg|jpeg|gif|png)"),
        check("imagenClase")
        .notEmpty()
        .withMessage("La imagen de la clase es obligatoria")
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
        .withMessage("La imagen debe ser una url valida y debe terminar en los siguientes formatos (jpg|jpeg|gif|png)"),
    check("descripcion_breve")
        .notEmpty()
        .withMessage("La descripcion de la clase es obligatoria")
        .isLength({ min:5 , max:80 })
        .withMessage("L descripcion de la clase debe tener entre 5 y 80 carecteres"),
    check("fecha")
        .notEmpty()
        .withMessage("La fecha de la clase es obligatoria")
        .isLength({ min:2 , max:50 })
        .withMessage("La fecha de la clase debe tener entre 2 y 50 carecteres"),
    check("horario")
        .notEmpty()
        .withMessage("El horario de la clase es obligatoria")
        .isLength({ min:2 , max:50 })
        .withMessage("El horario de la clase debe tener entre 2 y 50 carecteres"),
    
    (req, res, next)=>resultadoValidacion(req, res, next)
]

export default validacionClase;
