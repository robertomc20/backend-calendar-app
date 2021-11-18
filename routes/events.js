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
        check('title', 'Título es requerido').not().isEmpty(),
        check('start', 'Fecha de inicio es requerida').custom(isDate),
        check('end', 'Fecha de término es requerida').custom(isDate),
        validateFields
    ],
    createEvent
);

// Actualizar evento
router.put("/:id", updateEvent);

// Borrar evento
router.delete("/:id", deleteEvent);

module.exports = router;
