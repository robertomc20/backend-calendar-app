const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateJWT } = require("../helpers/jwt");

const registerUser = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        // console.log(user)

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "Ya existe un usuario con ese email"
            });
        }

        user = new User(req.body);

        // Encriptacion de password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        // Generar JWT
        const token = await generateJWT(user.id, user.name);

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
};

const loginUser = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        // console.log(user)

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: "Email o contraseña inválida"
            });
        }

        // Confirmar las password
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Contraseña inválida"
            });
        }

        // Generar JWT
        const token = await generateJWT(user.id, user.name);

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
};

const renewToken = async (req, res = response) => {
    const { uid, name } = req;

    // Generar nuevo JWT y se retorna en esta peticion
    const token = await generateJWT(uid, name);

    res.status(201).json({
        ok: true,
        uid,
        name,
        token
    });
};

module.exports = {
    registerUser,
    loginUser,
    renewToken
};
