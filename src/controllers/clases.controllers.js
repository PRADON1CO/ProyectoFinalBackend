import Clase from "../batabase/moduels/clase.js";

export const listarClases = async (req, res) => {
  try {
    //pedir a la BD las clases
    const clases = await Clase.find();
    //enviar la respuesta con las clases
    res.status(200).json(clases);
  } catch {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al listar las clases" });
  }
};

export const obtenerClase = async (req, res) => {
  try {
    //extraer el id o perametro del request
    console.log(req.params.id);

    //pedir a la bd buscar ese producto
    const claseBuscada = await Clase.findById(req.params.id);
    //quiero saber si el producto buscado es null
    if(!claseBuscada){
        res.status(400).json({ mensaje: `La clase ${req.params.id} no existe`})
    }
    // responder al front con el producto buscado
    res.status(200).json(claseBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al obtener la clase" });
  }
};

export const CrearClase = async (req, res) => {
  try {
    //validar los datos de la clase del -----
    //le vamos a pedir a la BD crear la clase
    console.log(req.body);
    const claseNueva = new Clase(req.body);
    await claseNueva.save();
    //enviar la respuesta de lo sucedido
    res.status(201).json({ mensaje: "La clase fue creada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear la clase",
    });
  }
};
