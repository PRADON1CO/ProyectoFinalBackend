import Usuario from "../batabase/moduels/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
    try{
        // tengo que agregar las validaciones
        // verifico si el email ya fue registrado
        const {email, password, nombreUsuario} = req.body
        // findOne({email}) equivale o es lo mismo que findOne({email: req.body.email})
        const usuarioExistente = await Usuario.findOne({email}) 
        if(usuarioExistente){
            return res.status(400).json({memsaje: 'Este correo ya se encuentra registrado'})
        }
        // crear el usuario
        const saltos = bcrypt.genSaltSync(10);
        const passwordHasheado = bcrypt.hashSync(password, saltos);
        const nuevoUsuario = new Usuario(req.body)
        nuevoUsuario.password = passwordHasheado;
        nuevoUsuario.save();
        // enviar respuesta
        res.status(201).json({memsaje: 'Usuario creado con exito'})
    }catch(error){
        console.error(error);
        res.status(400).json({mensaje: 'Ocurrio un error al intentar crear un usuario'})
    }
}

export const login = async (req, res) => {
    try{
        // verifico si el email ya fue registrado
        const {email, password, nombreUsuario} = req.body
        // findOne({email}) equivale o es lo mismo que findOne({email: req.body.email})
        const usuarioExistente = await Usuario.findOne({email}) 
        if(!usuarioExistente){
            return res.status(400).json({memsaje: 'Correo o pasasword incorrecto -email'});
        }
        // verificar el password
        const passwordValido = bcrypt.compareSync(password, usuarioExistente.password)
        // quiero saber si el password es correcto
        if(!passwordValido){
            return res.status(400).json({memsaje: 'Correo o pasasword incorrecto -password'})
        }
        // enviar respuesta afirmativa
        res.status(200).json({memsaje: 'Los datos del usuario son validos'})
        
    }catch(error){
        console.error(error);
        res.status(500).json({mensaje: 'Ocurrio un error al intentar logiar un usuario'});
    }
}