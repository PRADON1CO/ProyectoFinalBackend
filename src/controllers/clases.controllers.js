import Clase from "../batabase/moduels/clase.js";

export const listarClases = ((req, res)=>{
    console.log('prueba  de solucitud get');
    //enviar respuesta
    res.send('desde mi backend de Fit Factory');
})

export const CrearClase = ((req, res)=>{
    //validar los datos de la clase del -----
    //le vamos a pedir a la BD crear la clase
    //enviar la respuesta de lo sucedido
})