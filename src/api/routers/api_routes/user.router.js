//creamos los enrutadores, paquetes de rutas del usuario( rutas parciales)
const express=require('express');
//express un modulo que se llama router
const router=express.Router();
//para poder usar las funciones de los controladores tenemos que importarlas
const {registerUser, login, getProfile}=require('../../controllers/user.controller')
//importamos para poder usar la función del middleware
const{checkToken}=require('../../middleware/auth');
//Listado de rutas con su metodo
router.post('/register', registerUser);
router.post('/login',login);
router.get('/profile', checkToken, getProfile)

//esportamos el paquete de rutas para pooder usar
module.exports=router;