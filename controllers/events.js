const { response } = require("express");

const Event = require("../models/Event");

const getEvent = async (req, res = response) => {
    const events = await Event.find().populate("user", "name"); // para traer otro dato: 'name email'

    res.json({
        ok: true,
        events
    });
};

const createEvent = async (req, res = response) => {
    const event = new Event(req.body);

    try {
        event.user = req.uid;

        const eventSaved = await event.save();

        res.json({
            ok: true,
            eventSaved
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
};

const updateEvent = async (req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: "No existe un evento con ese ID"
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "No tienes permiso para editar este evento"
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        };

        const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
            new: true
        });
        // con el {new:true}, es una opcion, que nos permite retornar en la response el nuevo evento
        // actualizado, de lo contrario, nos da como response el evento que se actualizo

        res.json({
            ok: true,
            evento: eventUpdated
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
};

const deleteEvent = async (req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: "No existe un evento con ese ID"
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "No tienes permiso para eliminar este evento"
            });
        }

        await Event.findByIdAndDelete(eventId);

        res.json({
            ok: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
};

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};
