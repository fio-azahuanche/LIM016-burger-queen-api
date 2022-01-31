const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      unique: true,
      index: true, // acelera busqueda
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
    },
    roles: {
      admin: {
        type: Boolean,
        default:false,
      },
    },
  }, {
    timestamps: true,
    versionKey: false,
  });

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.plugin(mongoosePaginate)

module.exports = model("User", userSchema);






//voy a crear un método para encriptar la contraseña
//la funcion recibe una contraseña que va a ser encriptada
//bcrypt se encarga de cifrar la contraseña
//el metodo gensalt , método que hace más seguro, cuantas veces queermos aplicar el algotitmo
//el metodo hash convierte el string a unos caracteres indecifrables, dificiles de entender

//el método "REF" sirve para decir que tiene una referencia, o está relacionado con otro modelo de datos
//el tipo de dato que estoy guradando es un OjectId
//me sirve para relacionar el esquema de ROL con el USERS
