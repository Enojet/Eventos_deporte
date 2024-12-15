//para verificar si estamos autorizados o no
const jwt=require('jsonwebtoken');
const Users=require('../models/user.model');



//el paramentro next permite pasar del middleware al contorlador
const checkToken=async(req,res,next)=>{
   //validar que el token que se envia es correcto. El token se envia por un parametro que se llama authorization
    //para saber si me ha mandado el token, miramos si el parametro de authorization del header tiene algun valor
    //si no se envio el token
    if(!req.headers['authorization']){
       
            return res.status(401).json({msg:'Se necesita el Token'});
    }
    // si  se envio el token lo guardamos en una constante
    const token= req.headers['authorization'];
   
    let data;
   
    try {
    //separa el Bearer y el token y se queda con la posición 1 del array, con el numero del token
    const tokenVe=token.split(' ')[1];
   
 //verificame el token te ha llegado por la authorization,y el segundo parametro hay que poner la clave secreta con la que se acreado en el token
     data=jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
     
    } catch (error) {
     return res.status(404).json({msg:'el token es incorrecto'}) ;  
    }
    //buscar en la BDel usuario del token
    const user=await Users.findById(data.user_id);

    if(!user){
        return res.status(404).json({msg:'el usuario no existe'});
    }
//envio los datos del usurio al controlador
   req.user=user;
   next();
};
const checkRole=async(req,res,next)=>{
    //validar que el token que se envia es correcto. El token se envia por un parametro que se llama authorization
     //para saber si me ha mandado el token, miramos si el parametro de authorization del header tiene algun valor
     //si no se envio el token
     if(!req.headers['authorization']){
        
             return res.status(401).json({msg:'Se necesita el Token'});
     }
     // si  se envio el token lo guardamos en una constante
     const token= req.headers['authorization'];
    
     let data;
    
     try {
     //separa el Bearer y el token y se queda con la posición 1 del array, con el numero del token
     const tokenVe=token.split(' ')[1];
    
  //verificame el token te ha llegado por la authorization,y el segundo parametro hay que poner la clave secreta con la que se acreado en el token
      data=jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
      
     } catch (error) {
      return res.status(404).json({msg:'el token es incorrecto'}) ;  
     }
     //buscar en la BDel usuario del token
     const user=await Users.findById(data.user_id);
 
     if(!user){
         return res.status(404).json({msg:'el usuario no existe'});
     }
     if(user.role!=="admin"){
        return res.status(403).json({msg:'el usuario no es administrador'});
    }
 //envio los datos del usurio al controlador
    req.user=user;
    next();
 };

module.exports={checkToken, checkRole};