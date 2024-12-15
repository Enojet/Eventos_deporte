const express=require('express');
const router= express.Router();

router.use('/users',require('./api_routes/user.router'));
router.use('/events',require('./api_routes/event.router'));
module.exports=router;