import express from "express"
import cors from 'cors';
import morgan from 'morgan'
import './src/batabase/database.js'
import path from "path";
import { fileURLToPath } from 'url';
import claseRouter from "./src/routes/clases.routes.js";

//1- configuro un puerto
const app = express();
//creo una variable
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port') ,()=>{
    console.log('Estoy escuchando el purto ' + app.get(('port')))
})

//2- Configurar los middlewares

app.use(cors()) //permitir conexciones remotas
app.use(morgan('dev')) //datos extras en la terminal
//configurar que se interprete los datos en formado json y que pueda acceder a los datos del body del request
app.use(express.json());
app.use(express.urlencoded({extende:true}));
//coonfigurar un archivo estatico
const __file = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__file)
app.use(express.static(path.join(__dirname, '/public')))

//3- creo las rutas
//http://localhost:4001/api/prueba

// app.get('/prueba', (req, res)=>{
//     console.log('prueba  de solucitud get')
//     //enviar respuesta
//     res.send('desde mi backend de Fit Factory')
// })

app.use('/api', claseRouter)