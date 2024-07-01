import { validationResult } from "express-validator";
import Clase from "../batabase/moduels/clase.js";

export const listarClases = async (req, res) => {
  try {
    const clases = await Clase.find();
    res.status(200).json(clases);
  } catch {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al listar las clases" });
  }
};

export const obtenerClase = async (req, res) => {
  try {
    console.log(req.params.id);
    const claseBuscada = await Clase.findById(req.params.id);
    if (!claseBuscada) {
      res.status(400).json({ mensaje: `La clase ${req.params.id} no existe` });
    }
    res.status(200).json(claseBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al obtener la clase" });
  }
};

export const editarClase = async (req, res) => {
  try {
    const claseBuscada = await Clase.findById(req.params.id);
    if (!claseBuscada) {
      res.status(400).json({ mensaje: `La clase ${req.params.id} no existe` });
    }
    const claseEditada = await Clase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({ mensaje: "La clase fue editada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo editar la clase",
    });
  }
};

export const CrearClase = async (req, res) => {
  try {
    const claseNueva = new Clase(req.body);
    await claseNueva.save();
    res.status(201).json({ mensaje: "La clase fue creada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear la clase",
    });
  }
};

export const borraClase = async (req, res) => {
  try {
    const claseBuscada = await Clase.findById(req.params.id);
    if (!claseBuscada) {
      res.status(400).json({ mensaje: `La clase ${req.params.id} no existe` });
    }
    await Clase.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje: 'La clase fue eliminada correctamente'})
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .jsom({ mensje: "ocurrio un error al intentar borrar una clase" });
  }
};
