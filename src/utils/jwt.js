//archivo que contiene todas las funcionalidade del Token
//importar la dependenci jsonwebtoken
const jwt=require('jsonwebtoken');
//función para crear el token
const createToken=(info)=>{
    //de todos los datos que recosge el parametro info, nos quedamos unicamente con el id y el username
    const data ={
        user_id:info._id,
        user_username:info.username, 
        user_role:info.role
    
    };
    //data, contraseña de variable de entrono, el tiempo en el que expira
 return jwt.sign(data, process.env.SECRET_KEY_JWT)
};
module.exports={createToken};