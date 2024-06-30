import Clase from "../batabase/moduels/clase.js";

export const listarClases = async (req, res) => {
  try{
    //pedir a la BD las clases
    const clases = await Clase.find();
    //enviar la respuesta con las clases
    res.status(200).json(clases);
  }catch{
    console.error(error)
    res.status(500).json({mensaje: 'Ocurrio un error al listar las clases'})
  }
};

export const CrearClase = async (req, res) => {
  try {
    //validar los datos de la clase del -----
    //le vamos a pedir a la BD crear la clase
    console.log(req.body);
    const claseNueva = new Clase(req.body)
    await claseNueva.save();
    //enviar la respuesta de lo sucedido
    res.status(201).json({mensaje: 'La clase fue creada correctamente'})
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear la clase",
    });
  }
};
