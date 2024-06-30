import mongoose, { Schema } from "mongoose";

const claseSchema = new Schema({
  nombreClase: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true
  },
  nombreProfesor: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/;
        return pattern.test(valor);
      }
    }
  },
  imagenClase: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/;
        return pattern.test(valor);
      }
    }
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 80
  },
  fecha: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  horario: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  }
});

const Clase = mongoose.model('Clase', claseSchema);

export default Clase;
