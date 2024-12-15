// se define el esqueleto, celdas o propiedades del evento
//importar mongoose
const mongoose=require('mongoose');
//vamos a usar de mongoose la proopiedad de schema, nos permite definir la estructura de la conexion con su tipo de datos
const Schema=mongoose.Schema;
//creamos el esqueleto de la colección, guardado en una variable
//se hace una instacia de la clase y se crea un objeto
const eventSchema=new Schema({
    name:{
        type: String,
        required:[true, 'el titulo es requerido'],
        minLength: [5, "El titulo debe superar los 5 caracteres"],
        maxLength: [50, "El titulo no puede superar los 50 caracteres"]
    },
    description:{
        type: String,
        required: [true, "la descripcion es requerido"],
        minLength: [5, "La descripcion debe superar los 5 caracteres"],
        maxLength: [500, "La descripcion no puede superar los 500 caracteres"]
    },
    date:{
        type: Date, 
        required: [true, "la fecha es requerida"]
    },
    location:{
        type: String, 
        required: [true, "location es requerido"]
    },
    sportType:{
        type: String, 
        required:true
    },
    user:{
        type:String,
        required:true
        },
},
{
    collection:'events',
    timestamps:true,// nos indica fecha y hora cuando se creo y ultima modificación
}
);

// Modelo de datos siempre en mayuscula, le decimos que esta asociado a la colleccion, que esturctura tiene
const Events=mongoose.model('events', eventSchema);
//se va usar en otros lados, es un modulo que se va usar en el controlador se va exportar
module.exports=Events;