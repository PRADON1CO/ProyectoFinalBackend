import express from "express"
import cors from 'cors';
import morgan from 'morgan'
import './src/batabase/database.js'
import path from "path";
import { fileURLToPath } from 'url';
import claseRouter from "./src/routes/clases.routes.js";
import usuarioRouter from "./src/routes/usuarios.routes.js";

const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port') ,()=>{
    console.log('Estoy escuchando el purto ' + app.get(('port')))
})

app.use(cors()) 
app.use(morgan('dev')) 

app.use(express.json());
app.use(express.urlencoded({extende:true}));

const __file = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__file)
app.use(express.static(path.join(__dirname, '/public')))


app.use('/api', claseRouter)
app.use('/api/usuarios',usuarioRouter)