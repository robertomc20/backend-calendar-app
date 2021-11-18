const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
    // x-token en los headers
    const token = req.header("x-token");
    // console.log(token)

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "No hay un token en la petición"
        });
    }

    try {
        const { uid, name } = jwt.verify(
            token, 
            process.env.SECRET_JWT_SEED
        );
        // console.log(uid,name)

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token inválido"
        });
    }

    next();
};

module.exports = {
    validateJWT
};
