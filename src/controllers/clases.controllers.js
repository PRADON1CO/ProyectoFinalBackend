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

    //pedir a la bd buscar esa clase
    const claseBuscada = await Clase.findById(req.params.id);
    //quiero saber si la clasebuscada es null
    if (!claseBuscada) {
      res.status(400).json({ mensaje: `La clase ${req.params.id} no existe` });
    }
    // responder al front con la clase buscado
    res.status(200).json(claseBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al obtener la clase" });
  }
};

export const editarClase = async (req, res) => {
  try {
    //necesito el id y el body
    //validar los datos del body
    //pedir a la bs editar la clase
    //pedir a la base de datos buscar esa clase
    //pedir a la bd buscar esa clase
    const claseBuscada = await Clase.findById(req.params.id);
    //quiero saber si la clasebuscada es null
    if (!claseBuscada) {
      res.status(400).json({ mensaje: `La clase ${req.params.id} no existe` });
    }
    console.log(req.params.id)
    console.log(req.body)
    const claseEditada = await Clase.findByIdAndUpdate(req.params.id, req.body, {new: true} )
    console.log(claseEditada)
    res.status(200).json({mensaje: 'La clase fue editada correctamente'})

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo editar la clase",
    });
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
