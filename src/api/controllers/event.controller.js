const Events = require('../models/event.model');

const add = async (req, res) => {
    //añade eventos
    const newEvent = new Events(req.body);
    const createdEvent = await newEvent.save();
    return res.status(201).json({msg:'Evento creado correctamente',createdEvent})

}
const getAll = async (req, res) => {
    //Devuelve una lista de todos los eventos
    try {
        const getEvents = await Events.find();
        return res.status(200).json(getEvents);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'error en el servidor', error: error });
    }
}
const getEventById = async (req, res) => {
    try {
        const idEvent = req.params.id;
        //busca el id donde el id que le hemos mandado por el curso es igual a lo que se encuentra en la BD
        const data = await Events.findById(idEvent);
        if (!data) {
            return res.status(404).json({ msg: 'no existe ese  evento con ese id' });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'error en el servidor', error: error });
    }
    //devuelve un evento buscado por una ID
}
const updateEventId = async (req, res) => {
    //actualiza un evento buscado por una ID
    //el Id lo recibo a traves del URL y el contenido del evento lo recibimos a traves del body
    const id = req.params.id;
    const event = req.body;
    try {
        //función busca porId y modifica. Necesita 3 parametros, id, datos nuevos que quieres poner (event), es opcional te devuelve los cambios
        const newEvent = await Events.findByIdAndUpdate(id, event, { new: true });
        return res.status(200).json({msg:'Evento actualizado correctamente',newEvent});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'error en el servidor', error: error });
    }
}
const deleteEventId = async (req, res) => {
    //borra un evento buscado por una ID
    const id = req.params.id;
    console.log(id);
    try {
        //función busca porId y elimina. 
        const deleteEvent = await Events.findByIdAndDelete(id);
        return res.status(200).json({msg:'Evento borrado correctamente',deleteEvent});
    } catch (error) {

        console.log(error);
        return res.status(500).json({ msg: 'error en el servidor', error: error });
    }
}
const getEventUpcoming = async (req, res) => {
    const { from } = req.query;
    console.log(from);
   try {      
           //Validar la fecha
        if (!from) {
            return res.status(400).json({ msg: 'El parámetro "from" es requerido' });
        }
        const fromDate = new Date(from);
        console.log(fromDate);
        if (isNaN(fromDate)) {
            return res.status(400).json({ msg: 'Formato de fecha inválido' });
        }
        //Verificar eventos futuros
        const upcomingEvents = await Events.find({date: { $gte: fromDate }}).sort({ date: 1 })
        
        console.log(upcomingEvents);
        //operador para ordenar
        if (upcomingEvents.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron eventos futuros' });
        };
        return res.status(200).json(upcomingEvents);
    } catch (error) {
        return res.status(500).json({ msg: 'error en el servidor', error: error });
    }
};
const getEventByType = async (req, res) => {
    const { sport } = req.query;
  
    try {
        //función busca porId y modifica. Necesita 3 parametros, id, datos nuevos que quieres poner (event), es opcional te devuelve los cambios
        let eventosfilter = [];
        eventosfilter = await Events.find({ sportType: sport });
       if (eventosfilter.length===0) {
            return res.status(400).json({ msg: 'No hay evento de ese tipo' });
        }
        return res.status(200).json(eventosfilter);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'error en el servidor', error: error });
    }
};
const getEventDate = async (req, res) => {
    const { from, to } = req.query;
    console.log('from:', from, 'To:', to);
    try {
        //convertir from y to strigs a objetos
        const fromDate = new Date(from);
        const toDate = new Date(to);
        //Mirar si los formatos son correctos
        if (isNaN(fromDate) || isNaN(toDate)) {
            return res.status(400).json({ msg: 'Formato erroneo' });
        }
        const date = await Events.find({
            date: { $gte: fromDate, $lte: toDate }
        });
        console.log(date);
        // If no events are found
        if (date.length === 0) {
            return res.status(404).json({ msg: 'No hay evetos con esos valores' });
        }
        // Return the found events
        return res.status(200).json(date);

    } catch (error) {
        return res.status(500).json({ msg: 'Error en el servidor', error: error.message });
    }
};

module.exports = { add, getAll, getEventById, updateEventId, deleteEventId, getEventUpcoming, getEventByType, getEventDate };