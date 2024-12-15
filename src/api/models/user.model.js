// se define el esqueleto, celdas o propiedades del usuario
//importar mongoose
const mongoose=require('mongoose');
//vamos a usar de mongoose la proopiedad de schema, nos permite definir la estructura de la conexion con su tipo de datos
const Schema=mongoose.Schema;
//creamos el esqueleto de la colección, guardado en una variable
//se hace una instacia de la clase y se crea un objeto
const userSchema=new Schema({
    username:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    role:{type:String,  enum:['organizer', 'admin'],default:'organizer'}
},
{
    collection:'users',
    timestamps:true,// nos indica fecha y hora cuando se creo y ultima modificación
}
);

// Modelo de datos siempre en mayuscula, le decimos que esta asociado a la colleccion, que esturctura tiene
const Users=mongoose.model('users', userSchema);
//se va usar en otros lados, es un modulo que se va usar en el controlador se va exportar
module. exports=Users;