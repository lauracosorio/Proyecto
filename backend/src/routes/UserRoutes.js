import { Router } from 'express';
import User from '../models/UserModel.js';
import userController from '../controllers/UserController.js' //En el controlador se especifica que quiero que me devuelva . Hace la lógica
import { check } from 'express-validator';
import { validationResult } from "express-validator";

const userRoute = Router();

userRoute.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('country', 'El país es obligatorio').not().isEmpty(),
    check('city', 'La ciudad es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'La contraseña debe contener una mayúscula, un caracter especial, un número y más de 8 caracteres').matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/),
    check('role', 'El rol es obligatorio').not().isEmpty(),
], async (req, res) => {

    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ Error: err.array() })
    }
    
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        res.status(400);
        res.json({
            message: "El usuario ya existe",
        });
        return;
    } else {
        let data = await userController.register(req.body)

        res.json("Usuario Registrado Con Éxito")
    }
});

userRoute.post('/login', [
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'Contraseña invalida')
], async (req, res) => {

    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ Error: err.array() })
    }

    //destructuring
    const { email } = req.body;

    //checking de user already exist
    const user = await User.findOne({ email });

    if (!user) {
        res.status(500);
        res.json({
            message: "Datos invalidos",
        });
        return;
    }
    let data = await userController.login(req.body);
    res.json(data)
})

userRoute.delete(`/deleteUser`, async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        res.json({
            message: "El usuario no existe",
        });
        return;
    } else {
        let data = await userController.deleteUser(req.body)
        res.json(data)
    }
})

userRoute.put('/updateUser', async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        res.json({
            message: "Usuario no encontrado",
        });
        return;
    } else {
        let data = await userController.updateUser(req.body)
        res.json(data)
    }
})

export default userRoute;
