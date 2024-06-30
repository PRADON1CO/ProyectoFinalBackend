import express from "express"

//1- configuro un puerto
const app = express();
//creo una variable
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port') ,()=>{
    console.log('Estoy escuchando el purto ' + app.get(('port')))
})
//2- Configurar los middlewares


//3- creo las rutas
