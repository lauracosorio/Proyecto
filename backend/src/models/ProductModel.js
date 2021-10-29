import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema;

const ProductModel = new ProductSchema({
    name: {type: String, required: true},
    sku: {type: Number, required: true, unique: true},
    stock: {type: Number, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true},
    store: {type: String, required: true},
    image: {type: String, required: true}
})

const Product = mongoose.model('product', ProductModel);
export default Product;