import mongoose from 'mongoose';
const FacturaSchema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const User = mongoose.model('user')

const FacturaModel = new FacturaSchema({
    name: { type: String, required: true },
    store: { type: String, required: true },
    sku: { type: Number, required: true, unique: true },
    stock: { type: Number, required: true },
    price: { type: String, required: true },
    date: { type: Date, required: true },
    image: { type: String, required: true },
    amount: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
})

const Factura = mongoose.model('invoice', FacturaModel);
export default Factura;