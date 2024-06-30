import Clase from "../batabase/moduels/clase.js";

export const listarClases = (req, res) => {
  console.log("prueba  de solucitud get");
  //enviar respuesta
  res.send("desde mi backend de Fit Factory");
};

export const CrearClase = async (req, res) => {
  try {
    //validar los datos de la clase del -----
    //le vamos a pedir a la BD crear la clase
    console.log(req.body);
    const claseNueva = new Clase(req.body)
    await claseNueva.save();
    //enviar la respuesta de lo sucedido
    res.status(201).json({mensaje: 'La clase fur creada correctamente'})
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear la clase",
    });
  }
};
