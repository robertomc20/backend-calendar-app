const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/fields-validation");
const { validateJWT } = require("../middlewares/jwt-validation");
const {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");

// Con esto hacemos que todas las peticiones (solo las de abajo), usen este middleware
router.use(validateJWT);

// Crear peticion obtener eventos
router.get(
    "/", 
    getEvent
);

// Crear evento
router.post(
    "/", 
    [
        check('title', 'Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom(isDate),
        check('end', 'End date is required').custom(isDate),
        validateFields
    ],
    createEvent
);

// Actualizar evento
router.put("/:id", updateEvent);

// Borrar evento
router.delete("/:id", deleteEvent);

module.exports = router;
