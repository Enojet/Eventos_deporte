//En el controlador se van a crear las funciones, es el intermediario entre las cosas que viene  del front  que va a laDB
//todas las funciones son asincronas

// importaciones dependencias, models y funciones
const brcrypt=require('bcryptjs');
const  Users=require('../models/user.model');
const {createToken}= require('../../utils/jwt');



//y toda la información se manda poor el body
const registerUser=async (req, res)=>{
    try{
    //recibo ls datos
   const newUser=req.body;
   //validar si el usuario existe en la BD
     const userExist=await Users.findOne({username: newUser.username});
     //si existe mandamos error de respuesta
     if(userExist!==null){
        return res.status(404).json({msg:'El usuario ya existe'});
     }else{
    
     //Si no existe --> Encriptacion de contraseña y lo añadimos
     //usamos hash de la dependencia brypt que te devuelve un algoritmo grande con el string que tu le has mandado pero encriptado
     //y se le ponen 10 saltos, que indica cuantas veces se pasa el string para hacer el encriptado

     newUser.password=await brcrypt.hash(newUser.password,10)
       const user=new Users(newUser);
    const createdUser=await user.save();//const user=await Users.create(newUser)
    return res.status(201).json({msg:"usuario creado", data:createdUser});}

  
}catch(error){
    //usar modelo de datos user
    console.log(error);
    res.status(500).json({msg:'error en el servidor',error:error});
}
}
const login =async (req, res)=>{
    try {
        //recibir los datos( comom tiene datos sensbles se envian por el body)
        const {username, password}=req.body;
        //verificar el usuario con findOne
        //la clave es igual al valor por lo que se puede poner username en vez de username:req.body.username
        const userExist=await Users.findOne({username});
        //si no encuentra nada devuelve un error
        if(userExist===null){
            return res.status(400).json({msg:"el usuario no existe"});
        }
        //comparar la contraseña con la de la BD bcrypt.compare()
        //compara dos parametros: el string que se manda por el boody, el valor encriptado, devuelve true o false
        const same=await brcrypt.compare(password, userExist.password)
         //no coinciden envio mensaje de error
        if(!same){
            return res.status(400).json({msg:'Contraseña incorrecta'})
        }
         //si coinciden creo el token
        return res.status(200).json({
            msg:"Login Exitoso",
            token:createToken(userExist)
         })
    } catch (error) {
        return res.status(500).json({msg:'error en el servidor',error:error});
        
    }
};
const getProfile=async(req,res)=>{
    //req.user
    // busco en la BD la info ue me interesa del usuario
    //const dataUser=await Users.find({email:req.user.email});
    const dataUser=await Users.find({username:req.user.username});

return res.status(200).json(dataUser);
};
//se exporta para poder utilizar la función en otros lados
module.exports={registerUser, login, getProfile};