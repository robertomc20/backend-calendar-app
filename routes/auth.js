/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { registerUser, loginUser, renewToken } = require("../controllers/auth");
const { validateFields } = require("../middlewares/fields-validation");
const { validateJWT } = require("../middlewares/jwt-validation");

router.post(
    "/register",
    [
        // Middlewares
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        check("password", "La contraseña debe de ser de 6 caracteres").isLength(
            { min: 6 }
        ),
        validateFields
    ],
    registerUser
);

router.post(
    "/",
    [
        check("email", "El email es obligatorio").isEmail(),
        check("password", "La contraseña debe de ser de 6 caracteres").isLength(
            { min: 6 }
        ),
        validateFields
    ],
    loginUser
);

// Si es solo 1 middleware, se pasa solo asi, en caso de ser mas, como un arreglo (como arriba)
router.get("/renew", validateJWT, renewToken);

module.exports = router;
