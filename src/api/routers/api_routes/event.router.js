//creamos los enrutadores, paquetes de rutas del usuario( rutas parciales)
const express=require('express');
//express un modulo que se llama router
const router=express.Router();
//para poder usar las funciones de los controladores tenemos que importarlas
const {add, getAll, getEventById, updateEventId, deleteEventId, getEventUpcoming, getEventByType, getEventDate}=require('../../controllers/event.controller');
const{checkToken,checkRole}=require('../../middleware/auth');
//routas avanzadas

router.get('/getEvents/upcoming', getEventUpcoming);
router.get('/getByType', getEventByType);
router.get('/getEvents/date', getEventDate);
//Listado de rutas con su metodo
router.post('/add',checkToken, add);
router.get('/getAll',checkToken, getAll);
//ruta dinamica, por que el id es variable, segun el evento que quiera cambiar
router.get('/get/:id',checkToken, getEventById);
router.put('/update/:id',checkToken, updateEventId);
router.delete('/delete/:id',checkRole, deleteEventId);




//esportamos el paquete de rutas para poder usar
module.exports=router;