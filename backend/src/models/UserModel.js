import mongoose from 'mongoose';
const UserSchema = mongoose.Schema;

const UserModel = new UserSchema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true},
    rol: {type: String, required: true},
    store: {type: String, required: false}
})

const User = mongoose.model('user', UserModel);
export default User;