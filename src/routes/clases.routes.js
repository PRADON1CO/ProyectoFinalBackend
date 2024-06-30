import { Router } from "express";

const router = Router();

// app.get('/prueba', (req, res)=>{
//     console.log('prueba  de solucitud get')
//     //enviar respuesta
//     res.send('desde mi backend de Fit Factory')
// })

//creo rutas
router.route('/prueba').get((req, res)=>{
    console.log('prueba  de solucitud get')
    //enviar respuesta
    res.send('desde mi backend de Fit Factory')
    })
export default router;