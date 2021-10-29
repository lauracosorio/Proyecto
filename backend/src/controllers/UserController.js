import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

const register = async (user) => {
    const { name, country, city, email, password, rol, store } = user;

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //new user
    const newUser = new User({
        name: name,
        country: country,
        city: city,
        email: email,
        password: hashPassword,
        rol: rol,
        store: store
    })

    await newUser.save();
    return newUser;
}

const updateUser = async (user) => {
    const { name, country, city, email, password, rol, store } = user;

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await User.findOneAndUpdate(email, {
        name: name,
        country: country,
        city: city,
        password: hashPassword,
        rol: rol,
        store: store
    })

    return "Usuario Actualizado con éxito"
}

const login = async (user) => {
    const { email, password } = user;

    const userData = await User.findOne({ email });

    const validPassword = await bcrypt.compare(password, userData.password);
    if (!validPassword) {
        return "Contraseña Invalida";
    } else {
        return userData;
       // return "Login completado con éxito"
    }
}

const deleteUser = async (user) => {
    const { email } = user;
    await User.findOneAndDelete({ email })
    return "Usuario eliminado con éxito"
}

const userController = {
    register,
    updateUser,
    login,
    deleteUser
}

export default userController;